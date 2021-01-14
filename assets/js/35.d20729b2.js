(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{497:function(t,e,s){"use strict";s.r(e);var r=s(9),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"쿠버네티스에서-흔히-저지르는-실수-10가지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#쿠버네티스에서-흔히-저지르는-실수-10가지"}},[t._v("#")]),t._v(" 쿠버네티스에서 흔히 저지르는 실수 10가지")]),t._v(" "),s("blog-title-info",{attrs:{page:t.$page}}),t._v(" "),s("p",[t._v("쿠버네티스는 여러가지 기능을 제공하고 관리자가 제어할 수 있는 설정이 많습니다. 별다른 설정을 하지 않아도 잘 동작하는 것처럼 보이지만, 운영 환경에서는 좀더 세밀한 주의가 필요합니다.")]),t._v(" "),s("h2",{attrs:{id:"주요-내용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#주요-내용"}},[t._v("#")]),t._v(" 주요 내용")]),t._v(" "),s("p",[s("a",{attrs:{href:"(https://blog.pipetail.io/posts/2020-05-04-most-common-mistakes-k8s/)"}},[t._v("원글")]),t._v("을 간단하게 요약했습니다.")]),t._v(" "),s("p",[s("strong",[t._v("1. resources - requests and limits")])]),t._v(" "),s("ul",[s("li",[t._v("CPU, Memory 사용량 요청 및 제한하기")])]),t._v(" "),s("p",[s("strong",[t._v("2. liveness and readiness probes")])]),t._v(" "),s("ul",[s("li",[t._v("헬스체크하기")])]),t._v(" "),s("p",[s("strong",[t._v("3. LoadBalancer for every http service")])]),t._v(" "),s("ul",[s("li",[t._v("http 서비스는 여러개의 로드밸런서보다 하나의 Ingress 사용하기")])]),t._v(" "),s("p",[s("strong",[t._v("4. non-kubernetes-aware cluster autoscaling")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler",target:"_blank",rel:"noopener noreferrer"}},[t._v("cluster autoscaling"),s("OutboundLink")],1),t._v("을 이용하여 노드를 자동으로 확장하고 관리하기")])]),t._v(" "),s("p",[s("strong",[t._v("5. Not using the power of IAM/RBAC")])]),t._v(" "),s("ul",[s("li",[t._v("AWS SECRET ACCESS KEY를 사용하지 말고 서비스 어카운트 - "),s("a",{attrs:{href:"https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("IRSA(IAM roles for service accounts)"),s("OutboundLink")],1),t._v("를 사용하자")])]),t._v(" "),s("p",[s("strong",[t._v("6. self anti-affinities for pods")])]),t._v(" "),s("ul",[s("li",[t._v("Pod을 여러 노드에 분산하기 위해 "),s("code",[t._v("anti-affinites")]),t._v("를 지정하자")])]),t._v(" "),s("p",[s("strong",[t._v("7. no poddisruptionbudget")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("PodDisruptionBudget (pdb)")]),t._v("는 Pod의 최소 개수를 보증한다")])]),t._v(" "),s("p",[s("strong",[t._v("8. more tenants or envs in shared cluster")])]),t._v(" "),s("ul",[s("li",[t._v("쿠버네티스의 "),s("code",[t._v("namespace")]),t._v("를 이용한 격리를 믿지 말고 별도 클러스터로 관리하자")])]),t._v(" "),s("p",[s("strong",[t._v("9. externalTrafficPolicy: Cluster")])]),t._v(" "),s("ul",[s("li",[t._v("Pod 네트워크 지연시간을 줄이기 위해 Pod이 떠 있는 노드의 포트만 오픈하는 Local 설정을 사용하자")])]),t._v(" "),s("p",[s("strong",[t._v("10. pet clusters + stressing the control plane too much")])]),t._v(" "),s("ul",[s("li",[t._v("클러스터는 쉽게 새로 만들수 있고 두려워하지 말라")])]),t._v(" "),s("p",[s("strong",[t._v("bonus: using latest tag")])]),t._v(" "),s("ul",[s("li",[t._v("컨테이너 이미지에서 "),s("code",[t._v("latest")]),t._v(" 태그 사용은 더 이상 그만..")])]),t._v(" "),s("p",[t._v("더 상세한 내용은 👇 다음 링크를 확인하세요!")]),t._v(" "),s("h2",{attrs:{id:"참고"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고"}},[t._v("#")]),t._v(" 참고")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.pipetail.io/posts/2020-05-04-most-common-mistakes-k8s/",target:"_blank",rel:"noopener noreferrer"}},[t._v("10 most common mistakes using kubernetes"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);e.default=o.exports}}]);