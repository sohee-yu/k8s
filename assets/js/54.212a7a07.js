(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{521:function(t,a,s){"use strict";s.r(a);var e=s(9),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"kubectl-설치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-설치"}},[t._v("#")]),t._v(" kubectl 설치")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("⚡️ 목표")]),t._v(" "),s("p",[t._v("쿠버네티스에 명령을 전달하기 위한 "),s("code",[t._v("kubectl")]),t._v(" 프로그램을 설치합니다.")])]),t._v(" "),s("p",[s("code",[t._v("kubectl")]),t._v("은 쿠버네티스 CLI 도구입니다. 쿠버네티스 클러스터에 명령어를 전달하는 가장 흔한 방법이고 실습을 하면서 수십, 수백번 사용할 예정입니다.")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#설치하기"}},[t._v("설치하기")]),s("ul",[s("li",[s("a",{attrs:{href:"#windows"}},[t._v("windows")])]),s("li",[s("a",{attrs:{href:"#macos"}},[t._v("macOS")])]),s("li",[s("a",{attrs:{href:"#linux"}},[t._v("linux")])])])]),s("li",[s("a",{attrs:{href:"#테스트"}},[t._v("테스트")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"설치하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설치하기"}},[t._v("#")]),t._v(" 설치하기")]),t._v(" "),s("p",[t._v("kubectl "),s("code",[t._v("v1.20")]),t._v(" 버전을 설치합니다.")]),t._v(" "),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" windows")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -LO https://storage.googleapis.com/kubernetes-release/release/v1.20.0/bin/windows/amd64/kubectl.exe\n")])])]),s("h3",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[t._v("#")]),t._v(" macOS")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# homebrew를 사용하고 있다면..")]),t._v("\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" kubectl\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# homebrew를 사용하지 않는다면, 직접 binary 다운로드")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -LO https://storage.googleapis.com/kubernetes-release/release/v1.20.0/bin/darwin/amd64/kubectl "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x kubectl\n")])])]),s("h3",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" linux")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -LO "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://storage.googleapis.com/kubernetes-release/release/'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s https://storage.googleapis.com/kubernetes-release/release/stable.txt"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('/bin/linux/amd64/kubectl"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x ./kubectl\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" ./kubectl /usr/local/bin/kubectl\n")])])]),s("h2",{attrs:{id:"테스트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#테스트"}},[t._v("#")]),t._v(" 테스트")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("kubectl version\n")])])]),s("p",[s("strong",[t._v("실행 결과")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('Client Version: version.Info{Major:"1", Minor:"20", GitVersion:"v1.20.0", GitCommit:"af46c47ce925f4c4ad5cc8d1fca46c7b77d13b38", GitTreeState:"clean", BuildDate:"2020-12-08T17:59:43Z", GoVersion:"go1.15.5", Compiler:"gc", Platform:"darwin/amd64"}\nServer Version: version.Info{Major:"1", Minor:"20", GitVersion:"v1.20.0", GitCommit:"af46c47ce925f4c4ad5cc8d1fca46c7b77d13b38", GitTreeState:"clean", BuildDate:"2020-12-08T17:51:19Z", GoVersion:"go1.15.5", Compiler:"gc", Platform:"linux/amd64"}\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);