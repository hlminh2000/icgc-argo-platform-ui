'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _core = require('@emotion/core');

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _react = _interopRequireDefault(require('react'));

var _Button = _interopRequireDefault(require('../Button'));

var __jsx = _react['default'].createElement;

function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}

/*
 * Copyright (c) 2020 The Ontario Institute for Cancer Research. All rights reserved
 *
 * This program and the accompanying materials are made available under the terms of
 * the GNU Affero General Public License v3.0. You should have received a copy of the
 * GNU Affero General Public License along with this program.
 *  If not, see <http://www.gnu.org/licenses/>.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 * SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 * IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var __rest =
  (void 0 && (void 0).__rest) ||
  function (s, e) {
    var t = {};

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }

    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };

var _ref =
  process.env.NODE_ENV === 'production'
    ? {
        name: 'gvgrcy-Uikit-FileSelectButton',
        styles: 'display:none;;label:Uikit-FileSelectButton;',
      }
    : {
        name: 'gvgrcy-Uikit-FileSelectButton',
        styles: 'display:none;;label:Uikit-FileSelectButton;',
        map: '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q2dCIiwiZmlsZSI6ImluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhlIE9udGFyaW8gSW5zdGl0dXRlIGZvciBDYW5jZXIgUmVzZWFyY2guIEFsbCByaWdodHMgcmVzZXJ2ZWRcbiAqXG4gKiBUaGlzIHByb2dyYW0gYW5kIHRoZSBhY2NvbXBhbnlpbmcgbWF0ZXJpYWxzIGFyZSBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgdGVybXMgb2ZcbiAqIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdjMuMC4gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGVcbiAqIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS5cbiAqICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWVxuICogRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTXG4gKiBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVFxuICogU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsXG4gKiBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURURcbiAqIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUztcbiAqIE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOXG4gKiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBCdXR0b24gZnJvbSAndWlraXQvQnV0dG9uJztcbmNvbnN0IEZpbGVTZWxlY3RCdXR0b24gPSAoX2EpID0+IHtcbiAgICB2YXIgeyBjaGlsZHJlbiwgaW5wdXRQcm9wcywgb25GaWxlc1NlbGVjdCB9ID0gX2EsIHJlc3QgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCIsIFwiaW5wdXRQcm9wc1wiLCBcIm9uRmlsZXNTZWxlY3RcIl0pO1xuICAgIGNvbnN0IGZpbGVJbnB1dFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIGNvbnN0IHNlbGVjdEZpbGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZwID0gZmlsZUlucHV0UmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmIChmcCkge1xuICAgICAgICAgICAgZnAuY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuICg8QnV0dG9uIHsuLi5yZXN0fSBvbkNsaWNrPXtzZWxlY3RGaWxlfT5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHJlZj17ZmlsZUlucHV0UmVmfSBhY2NlcHQ9XCIudHN2XCIgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgIG9uRmlsZXNTZWxlY3QoZS50YXJnZXQuZmlsZXMpO1xuICAgIH19IGNzcz17Y3NzIGBcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBgfSB7Li4uaW5wdXRQcm9wc30vPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQnV0dG9uPik7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmlsZVNlbGVjdEJ1dHRvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzeC5tYXAiXX0= */',
        toString: _EMOTION_STRINGIFIED_CSS_ERROR__,
      };

var FileSelectButton = function FileSelectButton(_a) {
  var children = _a.children,
    inputProps = _a.inputProps,
    onFilesSelect = _a.onFilesSelect,
    rest = __rest(_a, ['children', 'inputProps', 'onFilesSelect']);

  var fileInputRef = /*#__PURE__*/ _react['default'].createRef();

  var selectFile = function selectFile() {
    var fp = fileInputRef.current;

    if (fp) {
      fp.click();
    }
  };

  return (0, _core.jsx)(
    _Button['default'],
    (0, _extends2['default'])({}, rest, {
      onClick: selectFile,
    }),
    (0, _core.jsx)(
      'input',
      (0, _extends2['default'])(
        {
          type: 'file',
          ref: fileInputRef,
          accept: '.tsv',
          onChange: function onChange(e) {
            onFilesSelect(e.target.files);
          },
          css: _ref,
        },
        inputProps,
      ),
    ),
    children,
  );
};

var _default = FileSelectButton;
exports['default'] = _default;
