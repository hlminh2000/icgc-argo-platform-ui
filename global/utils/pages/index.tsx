import * as React from 'react';
import orderBy from 'lodash/orderBy';
import {
  LOGIN_PAGE_PATH,
  PROGRAMS_LIST_PATH,
  USER_PAGE_PATH,
  PROGRAM_MANAGE_PATH,
  PROGRAM_SHORT_NAME_PATH,
  RDPC_PATH,
  PROGRAM_DASHBOARD_PATH,
} from 'global/constants/pages';
import {
  isDccMember,
  isRdpcMember,
  canReadSomeProgram,
  getReadableProgramShortNames,
} from '../egoJwt';
import { PageConfigProps, PageWithConfig } from './types';

export const getDefaultRedirectPathForUser = (
  egoJwt: string,
  useStatic: boolean = false,
): string => {
  if (isDccMember(egoJwt)) {
    return PROGRAMS_LIST_PATH;
  } else if (isRdpcMember(egoJwt)) {
    return RDPC_PATH;
  } else if (canReadSomeProgram(egoJwt)) {
    const readableProgramShortNames = getReadableProgramShortNames(egoJwt);
    const orderedProgramShortNames = orderBy(readableProgramShortNames);
    return useStatic
      ? PROGRAM_DASHBOARD_PATH
      : PROGRAM_DASHBOARD_PATH.replace(PROGRAM_SHORT_NAME_PATH, orderedProgramShortNames[0]);
  } else {
    return USER_PAGE_PATH;
  }
};
export const createPage = ({
  isPublic = false,
  isAccessible = async () => true,
  getInitialProps = async () => ({}),
  getGqlQueriesToPrefetch = async () => [],
}: {
  isPublic?: PageConfigProps['isPublic'];
  isAccessible?: PageConfigProps['isAccessible'];
  getInitialProps?: PageConfigProps['getInitialProps'];
  getGqlQueriesToPrefetch?: PageConfigProps['getGqlQueriesToPrefetch'];
}) => (page: Function = () => <div>Here's a page</div>): PageWithConfig => {
  page.isPublic = isPublic;
  page.isAccessible = isAccessible;
  page.getGqlQueriesToPrefetch = getGqlQueriesToPrefetch;
  page.getInitialProps = getInitialProps;
  return page;
};
