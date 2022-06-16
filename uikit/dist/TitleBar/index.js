'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _core = require('@emotion/core');

var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray'),
);

var _toArray2 = _interopRequireDefault(require('@babel/runtime/helpers/toArray'));

var _css2 = _interopRequireDefault(require('@emotion/css'));

var _styledBase = _interopRequireDefault(require('@emotion/styled-base'));

var _react = _interopRequireDefault(require('react'));

var _Icon = _interopRequireDefault(require('../Icon'));

var _useTheme = _interopRequireDefault(require('../utils/useTheme'));

var __jsx = _react['default'].createElement;

function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}

var Nav = /*#__PURE__*/ (0, _styledBase['default'])('nav', {
  target: 'e1dgo6q20',
  label: 'Uikit-Nav',
})(
  'padding:18px 29px 18px 0;',
  function (_ref) {
    var theme = _ref.theme;
    return /*#__PURE__*/ (0, _css2['default'])(
      theme.typography.title,
      ';label:Uikit-Nav;' +
        (process.env.NODE_ENV === 'production'
          ? ''
          : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Qm1CIiwiZmlsZSI6ImluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhlIE9udGFyaW8gSW5zdGl0dXRlIGZvciBDYW5jZXIgUmVzZWFyY2guIEFsbCByaWdodHMgcmVzZXJ2ZWRcbiAqXG4gKiBUaGlzIHByb2dyYW0gYW5kIHRoZSBhY2NvbXBhbnlpbmcgbWF0ZXJpYWxzIGFyZSBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgdGVybXMgb2ZcbiAqIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdjMuMC4gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS5cbiAqICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWVxuICogRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTXG4gKiBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVFxuICogU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsXG4gKiBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURURcbiAqIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUztcbiAqIE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOXG4gKiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgY3NzIGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi91dGlscy91c2VUaGVtZSc7XG5jb25zdCBOYXYgPSBzdHlsZWQoJ25hdicpIGBcbiAgcGFkZGluZzogMThweCAyOXB4IDE4cHggMDtcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3ModGhlbWUudHlwb2dyYXBoeS50aXRsZSl9O1xuICAmIGEge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRpdGxlQmFyLmxpbmtDb2xvcn07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuY29uc3QgT2wgPSBzdHlsZWQoJ29sJykgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbmA7XG5jb25zdCBMaSA9IHN0eWxlZCgnbGknKSBgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzKHRoZW1lLnR5cG9ncmFwaHkudGl0bGUpfTtcbmA7XG5jb25zdCBTZXAgPSBzdHlsZWQoJ2xpJykgYFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbmA7XG5jb25zdCBpbnRlcmxlYXZlID0gKGFyciA9IFtdLCB5KSA9PiB7XG4gICAgY29uc3QgW3gsIC4uLnhzXSA9IGFycjtcbiAgICByZXR1cm4geHMubGVuZ3RoID09PSAwID8gW3hdIDogW3gsIHksIC4uLmludGVybGVhdmUoeHMsIHkpXTtcbn07XG5jb25zdCBUaXRsZUJhciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGlkIH0pID0+IHtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBpbnRlcmxlYXZlKFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiBSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpLCA8U2VwPlxuICAgICAgPEljb24gd2lkdGg9XCIxMnB4XCIgaGVpZ2h0PVwiMTJweFwiIG5hbWU9XCJjaGV2cm9uX3JpZ2h0XCIgZmlsbD17dGhlbWUudGl0bGVCYXIuc2VwYXJhdG9yQ29sb3J9Lz5cbiAgICA8L1NlcD4pLm1hcCgoY2hpbGQsIGluZGV4KSA9PiBjaGlsZC50eXBlID09PSBTZXAgPyAoPFJlYWN0LkZyYWdtZW50IGtleT17YGNoaWxkLSR7aW5kZXh9YH0+e2NoaWxkfTwvUmVhY3QuRnJhZ21lbnQ+KSA6ICg8TGkga2V5PXtgY2hpbGQtJHtpbmRleH1gfT57Y2hpbGR9PC9MaT4pKTtcbiAgICByZXR1cm4gKDxOYXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXtpZH0+XG4gICAgICA8T2w+e2FsbEl0ZW1zfTwvT2w+XG4gICAgPC9OYXY+KTtcbn07XG5leHBvcnQgZGVmYXVsdCBUaXRsZUJhcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzeC5tYXAiXX0= */'),
    );
  },
  ';& a{color:',
  function (_ref2) {
    var theme = _ref2.theme;
    return theme.titleBar.linkColor;
  },
  ';text-decoration:none;}' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QjBCIiwiZmlsZSI6ImluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhlIE9udGFyaW8gSW5zdGl0dXRlIGZvciBDYW5jZXIgUmVzZWFyY2guIEFsbCByaWdodHMgcmVzZXJ2ZWRcbiAqXG4gKiBUaGlzIHByb2dyYW0gYW5kIHRoZSBhY2NvbXBhbnlpbmcgbWF0ZXJpYWxzIGFyZSBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgdGVybXMgb2ZcbiAqIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdjMuMC4gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS5cbiAqICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWVxuICogRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTXG4gKiBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVFxuICogU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsXG4gKiBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURURcbiAqIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUztcbiAqIE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOXG4gKiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgY3NzIGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi91dGlscy91c2VUaGVtZSc7XG5jb25zdCBOYXYgPSBzdHlsZWQoJ25hdicpIGBcbiAgcGFkZGluZzogMThweCAyOXB4IDE4cHggMDtcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3ModGhlbWUudHlwb2dyYXBoeS50aXRsZSl9O1xuICAmIGEge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRpdGxlQmFyLmxpbmtDb2xvcn07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuY29uc3QgT2wgPSBzdHlsZWQoJ29sJykgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbmA7XG5jb25zdCBMaSA9IHN0eWxlZCgnbGknKSBgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzKHRoZW1lLnR5cG9ncmFwaHkudGl0bGUpfTtcbmA7XG5jb25zdCBTZXAgPSBzdHlsZWQoJ2xpJykgYFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbmA7XG5jb25zdCBpbnRlcmxlYXZlID0gKGFyciA9IFtdLCB5KSA9PiB7XG4gICAgY29uc3QgW3gsIC4uLnhzXSA9IGFycjtcbiAgICByZXR1cm4geHMubGVuZ3RoID09PSAwID8gW3hdIDogW3gsIHksIC4uLmludGVybGVhdmUoeHMsIHkpXTtcbn07XG5jb25zdCBUaXRsZUJhciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGlkIH0pID0+IHtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBpbnRlcmxlYXZlKFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiBSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpLCA8U2VwPlxuICAgICAgPEljb24gd2lkdGg9XCIxMnB4XCIgaGVpZ2h0PVwiMTJweFwiIG5hbWU9XCJjaGV2cm9uX3JpZ2h0XCIgZmlsbD17dGhlbWUudGl0bGVCYXIuc2VwYXJhdG9yQ29sb3J9Lz5cbiAgICA8L1NlcD4pLm1hcCgoY2hpbGQsIGluZGV4KSA9PiBjaGlsZC50eXBlID09PSBTZXAgPyAoPFJlYWN0LkZyYWdtZW50IGtleT17YGNoaWxkLSR7aW5kZXh9YH0+e2NoaWxkfTwvUmVhY3QuRnJhZ21lbnQ+KSA6ICg8TGkga2V5PXtgY2hpbGQtJHtpbmRleH1gfT57Y2hpbGR9PC9MaT4pKTtcbiAgICByZXR1cm4gKDxOYXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXtpZH0+XG4gICAgICA8T2w+e2FsbEl0ZW1zfTwvT2w+XG4gICAgPC9OYXY+KTtcbn07XG5leHBvcnQgZGVmYXVsdCBUaXRsZUJhcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzeC5tYXAiXX0= */'),
);
var Ol = /*#__PURE__*/ (0, _styledBase['default'])('ol', {
  target: 'e1dgo6q21',
  label: 'Uikit-Ol',
})(
  process.env.NODE_ENV === 'production'
    ? {
        name: 'cch8ts',
        styles: 'display:flex;flex-wrap:wrap;align-items:center;padding:0;margin:0;',
      }
    : {
        name: 'cch8ts',
        styles: 'display:flex;flex-wrap:wrap;align-items:center;padding:0;margin:0;',
        map: '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQndCIiwiZmlsZSI6ImluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhlIE9udGFyaW8gSW5zdGl0dXRlIGZvciBDYW5jZXIgUmVzZWFyY2guIEFsbCByaWdodHMgcmVzZXJ2ZWRcbiAqXG4gKiBUaGlzIHByb2dyYW0gYW5kIHRoZSBhY2NvbXBhbnlpbmcgbWF0ZXJpYWxzIGFyZSBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgdGVybXMgb2ZcbiAqIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdjMuMC4gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS5cbiAqICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWVxuICogRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTXG4gKiBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVFxuICogU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsXG4gKiBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURURcbiAqIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUztcbiAqIE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOXG4gKiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgY3NzIGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi91dGlscy91c2VUaGVtZSc7XG5jb25zdCBOYXYgPSBzdHlsZWQoJ25hdicpIGBcbiAgcGFkZGluZzogMThweCAyOXB4IDE4cHggMDtcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3ModGhlbWUudHlwb2dyYXBoeS50aXRsZSl9O1xuICAmIGEge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRpdGxlQmFyLmxpbmtDb2xvcn07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuY29uc3QgT2wgPSBzdHlsZWQoJ29sJykgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbmA7XG5jb25zdCBMaSA9IHN0eWxlZCgnbGknKSBgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzKHRoZW1lLnR5cG9ncmFwaHkudGl0bGUpfTtcbmA7XG5jb25zdCBTZXAgPSBzdHlsZWQoJ2xpJykgYFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbmA7XG5jb25zdCBpbnRlcmxlYXZlID0gKGFyciA9IFtdLCB5KSA9PiB7XG4gICAgY29uc3QgW3gsIC4uLnhzXSA9IGFycjtcbiAgICByZXR1cm4geHMubGVuZ3RoID09PSAwID8gW3hdIDogW3gsIHksIC4uLmludGVybGVhdmUoeHMsIHkpXTtcbn07XG5jb25zdCBUaXRsZUJhciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGlkIH0pID0+IHtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBpbnRlcmxlYXZlKFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiBSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpLCA8U2VwPlxuICAgICAgPEljb24gd2lkdGg9XCIxMnB4XCIgaGVpZ2h0PVwiMTJweFwiIG5hbWU9XCJjaGV2cm9uX3JpZ2h0XCIgZmlsbD17dGhlbWUudGl0bGVCYXIuc2VwYXJhdG9yQ29sb3J9Lz5cbiAgICA8L1NlcD4pLm1hcCgoY2hpbGQsIGluZGV4KSA9PiBjaGlsZC50eXBlID09PSBTZXAgPyAoPFJlYWN0LkZyYWdtZW50IGtleT17YGNoaWxkLSR7aW5kZXh9YH0+e2NoaWxkfTwvUmVhY3QuRnJhZ21lbnQ+KSA6ICg8TGkga2V5PXtgY2hpbGQtJHtpbmRleH1gfT57Y2hpbGR9PC9MaT4pKTtcbiAgICByZXR1cm4gKDxOYXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXtpZH0+XG4gICAgICA8T2w+e2FsbEl0ZW1zfTwvT2w+XG4gICAgPC9OYXY+KTtcbn07XG5leHBvcnQgZGVmYXVsdCBUaXRsZUJhcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzeC5tYXAiXX0= */',
        toString: _EMOTION_STRINGIFIED_CSS_ERROR__,
      },
);
var Li = /*#__PURE__*/ (0, _styledBase['default'])('li', {
  target: 'e1dgo6q22',
  label: 'Uikit-Li',
})(
  'list-style:none;',
  function (_ref3) {
    var theme = _ref3.theme;
    return /*#__PURE__*/ (0, _css2['default'])(
      theme.typography.title,
      ';label:Uikit-Li;' +
        (process.env.NODE_ENV === 'production'
          ? ''
          : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q21CIiwiZmlsZSI6ImluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhlIE9udGFyaW8gSW5zdGl0dXRlIGZvciBDYW5jZXIgUmVzZWFyY2guIEFsbCByaWdodHMgcmVzZXJ2ZWRcbiAqXG4gKiBUaGlzIHByb2dyYW0gYW5kIHRoZSBhY2NvbXBhbnlpbmcgbWF0ZXJpYWxzIGFyZSBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgdGVybXMgb2ZcbiAqIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdjMuMC4gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS5cbiAqICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWVxuICogRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTXG4gKiBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVFxuICogU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsXG4gKiBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURURcbiAqIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUztcbiAqIE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOXG4gKiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgY3NzIGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi91dGlscy91c2VUaGVtZSc7XG5jb25zdCBOYXYgPSBzdHlsZWQoJ25hdicpIGBcbiAgcGFkZGluZzogMThweCAyOXB4IDE4cHggMDtcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3ModGhlbWUudHlwb2dyYXBoeS50aXRsZSl9O1xuICAmIGEge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRpdGxlQmFyLmxpbmtDb2xvcn07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuY29uc3QgT2wgPSBzdHlsZWQoJ29sJykgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbmA7XG5jb25zdCBMaSA9IHN0eWxlZCgnbGknKSBgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzKHRoZW1lLnR5cG9ncmFwaHkudGl0bGUpfTtcbmA7XG5jb25zdCBTZXAgPSBzdHlsZWQoJ2xpJykgYFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbmA7XG5jb25zdCBpbnRlcmxlYXZlID0gKGFyciA9IFtdLCB5KSA9PiB7XG4gICAgY29uc3QgW3gsIC4uLnhzXSA9IGFycjtcbiAgICByZXR1cm4geHMubGVuZ3RoID09PSAwID8gW3hdIDogW3gsIHksIC4uLmludGVybGVhdmUoeHMsIHkpXTtcbn07XG5jb25zdCBUaXRsZUJhciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGlkIH0pID0+IHtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBpbnRlcmxlYXZlKFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiBSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpLCA8U2VwPlxuICAgICAgPEljb24gd2lkdGg9XCIxMnB4XCIgaGVpZ2h0PVwiMTJweFwiIG5hbWU9XCJjaGV2cm9uX3JpZ2h0XCIgZmlsbD17dGhlbWUudGl0bGVCYXIuc2VwYXJhdG9yQ29sb3J9Lz5cbiAgICA8L1NlcD4pLm1hcCgoY2hpbGQsIGluZGV4KSA9PiBjaGlsZC50eXBlID09PSBTZXAgPyAoPFJlYWN0LkZyYWdtZW50IGtleT17YGNoaWxkLSR7aW5kZXh9YH0+e2NoaWxkfTwvUmVhY3QuRnJhZ21lbnQ+KSA6ICg8TGkga2V5PXtgY2hpbGQtJHtpbmRleH1gfT57Y2hpbGR9PC9MaT4pKTtcbiAgICByZXR1cm4gKDxOYXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXtpZH0+XG4gICAgICA8T2w+e2FsbEl0ZW1zfTwvT2w+XG4gICAgPC9OYXY+KTtcbn07XG5leHBvcnQgZGVmYXVsdCBUaXRsZUJhcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzeC5tYXAiXX0= */'),
    );
  },
  ';' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ3dCIiwiZmlsZSI6ImluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhlIE9udGFyaW8gSW5zdGl0dXRlIGZvciBDYW5jZXIgUmVzZWFyY2guIEFsbCByaWdodHMgcmVzZXJ2ZWRcbiAqXG4gKiBUaGlzIHByb2dyYW0gYW5kIHRoZSBhY2NvbXBhbnlpbmcgbWF0ZXJpYWxzIGFyZSBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgdGVybXMgb2ZcbiAqIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdjMuMC4gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS5cbiAqICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWVxuICogRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTXG4gKiBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVFxuICogU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsXG4gKiBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURURcbiAqIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUztcbiAqIE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOXG4gKiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgY3NzIGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi91dGlscy91c2VUaGVtZSc7XG5jb25zdCBOYXYgPSBzdHlsZWQoJ25hdicpIGBcbiAgcGFkZGluZzogMThweCAyOXB4IDE4cHggMDtcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3ModGhlbWUudHlwb2dyYXBoeS50aXRsZSl9O1xuICAmIGEge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRpdGxlQmFyLmxpbmtDb2xvcn07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuY29uc3QgT2wgPSBzdHlsZWQoJ29sJykgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbmA7XG5jb25zdCBMaSA9IHN0eWxlZCgnbGknKSBgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzKHRoZW1lLnR5cG9ncmFwaHkudGl0bGUpfTtcbmA7XG5jb25zdCBTZXAgPSBzdHlsZWQoJ2xpJykgYFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbmA7XG5jb25zdCBpbnRlcmxlYXZlID0gKGFyciA9IFtdLCB5KSA9PiB7XG4gICAgY29uc3QgW3gsIC4uLnhzXSA9IGFycjtcbiAgICByZXR1cm4geHMubGVuZ3RoID09PSAwID8gW3hdIDogW3gsIHksIC4uLmludGVybGVhdmUoeHMsIHkpXTtcbn07XG5jb25zdCBUaXRsZUJhciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGlkIH0pID0+IHtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBpbnRlcmxlYXZlKFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiBSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpLCA8U2VwPlxuICAgICAgPEljb24gd2lkdGg9XCIxMnB4XCIgaGVpZ2h0PVwiMTJweFwiIG5hbWU9XCJjaGV2cm9uX3JpZ2h0XCIgZmlsbD17dGhlbWUudGl0bGVCYXIuc2VwYXJhdG9yQ29sb3J9Lz5cbiAgICA8L1NlcD4pLm1hcCgoY2hpbGQsIGluZGV4KSA9PiBjaGlsZC50eXBlID09PSBTZXAgPyAoPFJlYWN0LkZyYWdtZW50IGtleT17YGNoaWxkLSR7aW5kZXh9YH0+e2NoaWxkfTwvUmVhY3QuRnJhZ21lbnQ+KSA6ICg8TGkga2V5PXtgY2hpbGQtJHtpbmRleH1gfT57Y2hpbGR9PC9MaT4pKTtcbiAgICByZXR1cm4gKDxOYXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXtpZH0+XG4gICAgICA8T2w+e2FsbEl0ZW1zfTwvT2w+XG4gICAgPC9OYXY+KTtcbn07XG5leHBvcnQgZGVmYXVsdCBUaXRsZUJhcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzeC5tYXAiXX0= */'),
);
var Sep = /*#__PURE__*/ (0, _styledBase['default'])('li', {
  target: 'e1dgo6q23',
  label: 'Uikit-Sep',
})(
  process.env.NODE_ENV === 'production'
    ? {
        name: '1v54zq5',
        styles:
          'list-style:none;display:flex;user-select:none;margin-left:8px;margin-right:8px;font-size:30px;',
      }
    : {
        name: '1v54zq5',
        styles:
          'list-style:none;display:flex;user-select:none;margin-left:8px;margin-right:8px;font-size:30px;',
        map: '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ3lCIiwiZmlsZSI6ImluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhlIE9udGFyaW8gSW5zdGl0dXRlIGZvciBDYW5jZXIgUmVzZWFyY2guIEFsbCByaWdodHMgcmVzZXJ2ZWRcbiAqXG4gKiBUaGlzIHByb2dyYW0gYW5kIHRoZSBhY2NvbXBhbnlpbmcgbWF0ZXJpYWxzIGFyZSBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgdGVybXMgb2ZcbiAqIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdjMuMC4gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS5cbiAqICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWVxuICogRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTXG4gKiBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVFxuICogU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsXG4gKiBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURURcbiAqIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUztcbiAqIE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOXG4gKiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgY3NzIGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi91dGlscy91c2VUaGVtZSc7XG5jb25zdCBOYXYgPSBzdHlsZWQoJ25hdicpIGBcbiAgcGFkZGluZzogMThweCAyOXB4IDE4cHggMDtcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3ModGhlbWUudHlwb2dyYXBoeS50aXRsZSl9O1xuICAmIGEge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRpdGxlQmFyLmxpbmtDb2xvcn07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuY29uc3QgT2wgPSBzdHlsZWQoJ29sJykgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbmA7XG5jb25zdCBMaSA9IHN0eWxlZCgnbGknKSBgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzKHRoZW1lLnR5cG9ncmFwaHkudGl0bGUpfTtcbmA7XG5jb25zdCBTZXAgPSBzdHlsZWQoJ2xpJykgYFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbmA7XG5jb25zdCBpbnRlcmxlYXZlID0gKGFyciA9IFtdLCB5KSA9PiB7XG4gICAgY29uc3QgW3gsIC4uLnhzXSA9IGFycjtcbiAgICByZXR1cm4geHMubGVuZ3RoID09PSAwID8gW3hdIDogW3gsIHksIC4uLmludGVybGVhdmUoeHMsIHkpXTtcbn07XG5jb25zdCBUaXRsZUJhciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGlkIH0pID0+IHtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBpbnRlcmxlYXZlKFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiBSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpLCA8U2VwPlxuICAgICAgPEljb24gd2lkdGg9XCIxMnB4XCIgaGVpZ2h0PVwiMTJweFwiIG5hbWU9XCJjaGV2cm9uX3JpZ2h0XCIgZmlsbD17dGhlbWUudGl0bGVCYXIuc2VwYXJhdG9yQ29sb3J9Lz5cbiAgICA8L1NlcD4pLm1hcCgoY2hpbGQsIGluZGV4KSA9PiBjaGlsZC50eXBlID09PSBTZXAgPyAoPFJlYWN0LkZyYWdtZW50IGtleT17YGNoaWxkLSR7aW5kZXh9YH0+e2NoaWxkfTwvUmVhY3QuRnJhZ21lbnQ+KSA6ICg8TGkga2V5PXtgY2hpbGQtJHtpbmRleH1gfT57Y2hpbGR9PC9MaT4pKTtcbiAgICByZXR1cm4gKDxOYXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXtpZH0+XG4gICAgICA8T2w+e2FsbEl0ZW1zfTwvT2w+XG4gICAgPC9OYXY+KTtcbn07XG5leHBvcnQgZGVmYXVsdCBUaXRsZUJhcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzeC5tYXAiXX0= */',
        toString: _EMOTION_STRINGIFIED_CSS_ERROR__,
      },
);

var interleave = function interleave() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var y = arguments.length > 1 ? arguments[1] : undefined;

  var _arr = (0, _toArray2['default'])(arr),
    x = _arr[0],
    xs = _arr.slice(1);

  return xs.length === 0
    ? [x]
    : [x, y].concat((0, _toConsumableArray2['default'])(interleave(xs, y)));
};

var TitleBar = function TitleBar(_ref4) {
  var children = _ref4.children,
    className = _ref4.className,
    id = _ref4.id;
  var theme = (0, _useTheme['default'])();
  var allItems = interleave(
    _react['default'].Children.toArray(children).filter(function (child) {
      return /*#__PURE__*/ _react['default'].isValidElement(child);
    }),
    (0, _core.jsx)(
      Sep,
      null,
      (0, _core.jsx)(_Icon['default'], {
        width: '12px',
        height: '12px',
        name: 'chevron_right',
        fill: theme.titleBar.separatorColor,
      }),
    ),
  ).map(function (child, index) {
    return child.type === Sep
      ? (0, _core.jsx)(
          _react['default'].Fragment,
          {
            key: 'child-'.concat(index),
          },
          child,
        )
      : (0, _core.jsx)(
          Li,
          {
            key: 'child-'.concat(index),
          },
          child,
        );
  });
  return (0, _core.jsx)(
    Nav,
    {
      className: className,
      id: id,
    },
    (0, _core.jsx)(Ol, null, allItems),
  );
};

var _default = TitleBar;
exports['default'] = _default;
