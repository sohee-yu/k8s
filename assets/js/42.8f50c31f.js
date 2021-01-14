(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{505:function(t,a,r){"use strict";r.r(a);var e=r(9),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"docker-hub-pull-횟수-6시간에-100회-제한-정책"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-hub-pull-횟수-6시간에-100회-제한-정책"}},[t._v("#")]),t._v(" Docker Hub Pull 횟수 6시간에 100회 제한 정책")]),t._v(" "),r("blog-title-info",{attrs:{page:t.$page}}),t._v(" "),r("p",[t._v("Docker Hub는 대용량의 컨테이너 이미지를 손쉽게 보관하고 사용할 수 있는 곳입니다. 작게는 수백Mb부터 크게는 1Gb가 넘는 이미지를 저장할 수 있고 공개된 이미지라면 누구나 무제한으로 다운받아 사용할 수 있습니다.")]),t._v(" "),r("p",[t._v('도커에선 "약 1%정도의 익명의 사용자가 Docker Hub 전체 다운로드의 30%를 사용" 한다고 말하면서 기존 무제한 다운로드 정책에서 제한된 정책을 발표했습니다.')]),t._v(" "),r("h2",{attrs:{id:"docker-hub-rate-limit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-hub-rate-limit"}},[t._v("#")]),t._v(" Docker Hub Rate Limit")]),t._v(" "),r("p",[t._v("Docker Hub 정책은 다음과 같습니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("유저")]),t._v(" "),r("th",[t._v("제한")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("익명 유저(docker login 안함)")]),t._v(" "),r("td",[t._v("IP 기반으로 6시간동안 100번 request 제한")])]),t._v(" "),r("tr",[r("td",[t._v("로그인 유저(docker login 함)")]),t._v(" "),r("td",[t._v("계정 기반으로 6시간동안 200번 request 가능")])]),t._v(" "),r("tr",[r("td",[t._v("지불 계정 유저(docker login 한 Paid 유저)")]),t._v(" "),r("td",[t._v("제한 없음")])])])]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("지불 유저의 경우도 "),r("a",{attrs:{href:"https://www.facebook.com/groups/k8skr/permalink/2917497448531909/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IP 기반 제한"),r("OutboundLink")],1),t._v("이 있다고 합니다. 공개 저장소를 대량으로 사용하는 경우 주의가 필요합니다.")])]),t._v(" "),r("h2",{attrs:{id:"해결-방법"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#해결-방법"}},[t._v("#")]),t._v(" 해결 방법")]),t._v(" "),r("ol",[r("li",[t._v("유료 계정")])]),t._v(" "),r("p",[r("code",[t._v("Pro")]),t._v("($5) 또는 "),r("code",[t._v("Team")]),t._v("($7) 이상 계정으로 업그레이드 합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:"/k8s/imgs/archive/2021-01-02-docker-hub-pull-limit/docker-hub-pricing.png",alt:"EKS Distro"}})]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("proxy 구축")])]),t._v(" "),r("p",[t._v("내부에 별도 저장소를 설정하여 mirror/cache 용도로 사용하는 방법입니다. 그래도 요청이 많다면 문제가 생길수 있습니다.")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://goharbor.io/docs/2.1.0/administration/configure-proxy-cache/?fbclid=IwAR3-6nsvZinCE49Ga92eJGXkwEJeot8_Z9ZF0N3nuNjQ0yet54eEs1xDtnI",target:"_blank",rel:"noopener noreferrer"}},[t._v("Harbor"),r("OutboundLink")],1)]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("오픈 소스 지원")])]),t._v(" "),r("p",[t._v("오픈 소스 프로젝트의 경우 제한없이 사용할 수 있도록 지원합니다.")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.docker.com/community/open-source/application?fbclid=IwAR2X0pI80JqhckHTTlaz7VF_KAg95aQVlCsco4vwFI2F0-dACuOc7kU4cio",target:"_blank",rel:"noopener noreferrer"}},[t._v("Open Source Community Application"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"제한-확인하기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#제한-확인하기"}},[t._v("#")]),t._v(" 제한 확인하기")]),t._v(" "),r("p",[t._v("Docker Hub API는 응답 헤더에 다음 값을 보냅니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("헤더 이름")]),t._v(" "),r("th",[t._v("설명")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("RateLimit-Limit")])]),t._v(" "),r("td",[t._v("6시간동안 가능한 전체 횟수")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("RateLimit-Remaining")])]),t._v(" "),r("td",[t._v("6시간동안 가능한 남은 횟수")])])])]),t._v(" "),r("ol",[r("li",[t._v("익명 유저")])]),t._v(" "),r("p",[t._v("100번 가능, 96회 남음 확인. IP를 바꾸면 초기화 됩니다.")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("$ "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TOKEN")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://auth.docker.io/token?service=registry.docker.io&scope=repository:ratelimitpreview/test:pull"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq -r .token"),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --head -H "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Bearer '),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TOKEN")]),t._v('"')]),t._v(" https://registry-1.docker.io/v2/ratelimitpreview/test/manifests/latest "),r("span",{pre:!0,attrs:{class:"token operator"}},[r("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),r("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" RateLimit\n\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" RateLimit-Limit: "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("w")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("21600")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" RateLimit-Remaining: "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("96")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("w")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("21600")]),t._v("\n")])])]),r("ol",{attrs:{start:"2"}},[r("li",[t._v("로그인 유저")])]),t._v(" "),r("p",[t._v("200번 가능, 176회 남음 확인. IP를 변경해도 유저 기반으로 결정합니다.")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("$ "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TOKEN")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --user "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'username:password'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://auth.docker.io/token?service=registry.docker.io&scope=repository:ratelimitpreview/test:pull"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq -r .token"),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --head -H "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Bearer '),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TOKEN")]),t._v('"')]),t._v(" https://registry-1.docker.io/v2/ratelimitpreview/test/manifests/latest "),r("span",{pre:!0,attrs:{class:"token operator"}},[r("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),r("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" RateLimit\n\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" RateLimit-Limit: "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("w")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("21600")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" RateLimit-Remaining: "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("176")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("w")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("21600")]),t._v("\n")])])]),r("ol",{attrs:{start:"3"}},[r("li",[t._v("에러 메시지")])]),t._v(" "),r("p",[t._v("제한에 걸렸을 경우 응답입니다.")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("HTTP/1.1 "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("429")]),t._v(" Too Many Requests\nCache-Control: no-cache\nConnection: close\nContent-Type: application/json\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"errors"')]),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TOOMANYREQUESTS"')]),t._v(",\n      "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You have reached your pull rate limit. You may increase the limit by authenticating and upgrading: https://www.docker.com/increase-rate-limit"')]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("h2",{attrs:{id:"쿠버네티스에서-로그인-계정-사용-방법"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#쿠버네티스에서-로그인-계정-사용-방법"}},[t._v("#")]),t._v(" 쿠버네티스에서 로그인 계정 사용 방법")]),t._v(" "),r("p",[t._v("쿠버네티스에서 로그인 계정으로 Docker Hub에 접근 하려면 추가 설정이 필요합니다.")]),t._v(" "),r("ol",[r("li",[t._v("인증정보를 추가")]),t._v(" "),r("li",[t._v("Pod 설정에 어떤 인증을 사용할지 명시")]),t._v(" "),r("li",[t._v("매번 명시하기 귀찮은 경우 operator 이용")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://kubernetes.io/ko/docs/tasks/configure-pod-container/pull-image-private-registry/",target:"_blank",rel:"noopener noreferrer"}},[t._v("프라이빗 레지스트리에서 이미지 받아오기"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/alexellis/registry-creds",target:"_blank",rel:"noopener noreferrer"}},[t._v("registry-creds operator"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"docker-hub-대안"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-hub-대안"}},[t._v("#")]),t._v(" Docker Hub 대안")]),t._v(" "),r("p",[t._v("무료로 사용할 수 있는 또 다른 대안은 별도 registry를 사용하는 방법입니다.")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.github.com/en/free-pro-team@latest/packages/guides/about-github-container-registry",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Container Regsitry"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://aws.amazon.com/ko/about-aws/whats-new/2020/12/announcing-amazon-ecr-public-and-amazon-ecr-public-gallery/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon ECR Public"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"참고"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#참고"}},[t._v("#")]),t._v(" 참고")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.docker.com/increase-rate-limits",target:"_blank",rel:"noopener noreferrer"}},[t._v("Understanding Docker Hub Rate Limiting"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.docker.com/blog/checking-your-current-docker-pull-rate-limits-and-status/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Checking Your Current Docker Pull Rate Limits and Status"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://gist.github.com/leoh0/e804a74b832671bd522dc4ca3390b7ce",target:"_blank",rel:"noopener noreferrer"}},[t._v("k8s에서의 docker rate limit 문제 정리"),r("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=s.exports}}]);