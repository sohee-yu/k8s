(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{449:function(t,s,e){t.exports=e.p+"assets/img/prod-arch.a85a8475.png"},450:function(t,s,e){t.exports=e.p+"assets/img/dev-arch.8b35f7e2.png"},451:function(t,s,e){t.exports=e.p+"assets/img/virtualbox.4208bcbe.png"},452:function(t,s,e){t.exports=e.p+"assets/img/aws-lightsail.0775e2b3.png"},453:function(t,s,e){t.exports=e.p+"assets/img/create-instance.ae8cd557.png"},454:function(t,s,e){t.exports=e.p+"assets/img/pick-instance.f54157b1.png"},455:function(t,s,e){t.exports=e.p+"assets/img/choose-plan.704e0f6b.png"},456:function(t,s,e){t.exports=e.p+"assets/img/instance-detail.362861c7.png"},457:function(t,s,e){t.exports=e.p+"assets/img/firewall.f5383587.png"},458:function(t,s,e){t.exports=e.p+"assets/img/firewall-result.9ffb8c3a.png"},459:function(t,s,e){t.exports=e.p+"assets/img/wetty.e76db53b.png"},460:function(t,s,e){t.exports=e.p+"assets/img/docker-for-desktop.2b1b439e.png"},522:function(t,s,e){"use strict";e.r(s);var a=e(9),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"쿠버네티스-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#쿠버네티스-설치"}},[t._v("#")]),t._v(" 쿠버네티스 설치")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("⚡️ 목표")]),t._v(" "),a("p",[t._v("쿠버네티스 실습을 위해 클러스터를 설치합니다.")])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#개발-vs-운영"}},[t._v("개발 vs 운영")])]),a("li",[a("a",{attrs:{href:"#minikube"}},[t._v("minikube")]),a("ul",[a("li",[a("a",{attrs:{href:"#windows"}},[t._v("windows")])]),a("li",[a("a",{attrs:{href:"#macos"}},[t._v("macOS")])]),a("li",[a("a",{attrs:{href:"#linux"}},[t._v("linux")])]),a("li",[a("a",{attrs:{href:"#virtualbox-설치"}},[t._v("VirtualBox 설치")])])])]),a("li",[a("a",{attrs:{href:"#k3s"}},[t._v("k3s")])]),a("li",[a("a",{attrs:{href:"#그외"}},[t._v("그외")]),a("ul",[a("li",[a("a",{attrs:{href:"#docker-for-desktop"}},[t._v("docker for desktop")])]),a("li",[a("a",{attrs:{href:"#kind"}},[t._v("kind")])])])]),a("li",[a("a",{attrs:{href:"#운영환경"}},[t._v("운영환경")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"개발-vs-운영"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#개발-vs-운영"}},[t._v("#")]),t._v(" 개발 vs 운영")]),t._v(" "),a("p",[t._v("쿠버네티스를 운영환경에 설치하기 위해선 최소 3대의 마스터 서버와 컨테이너 배포를 위한 n개의 노드 서버가 필요합니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(449),alt:"운영환경 아키텍처"}})]),t._v(" "),a("p",[t._v("이러한 설치는 과정이 복잡하고 배포 환경(AWS, Google Cloud, Azure, Bare Metal, ...)에 따라 방법이 다르기 때문에 처음 공부할 때 바로 구축하기는 적합하지 않습니다.")]),t._v(" "),a("p",[t._v("여기선 개발 환경을 위해 마스터와 노드를 하나의 서버에 설치하여 손쉽게 관리하는 방법을 사용합니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(450),alt:"운영환경 아키텍처"}})]),t._v(" "),a("p",[t._v("대표적인 개발 환경 구축 방법으로 "),a("RouterLink",{attrs:{to:"/prepare/kubernetes-setup.html#minikube"}},[t._v("minikube")]),t._v(", "),a("RouterLink",{attrs:{to:"/prepare/kubernetes-setup.html#k3s"}},[t._v("k3s")]),t._v(", "),a("RouterLink",{attrs:{to:"/prepare/kubernetes-setup.html#docker-for-desktop"}},[t._v("docker for desktop")]),t._v(", "),a("RouterLink",{attrs:{to:"/prepare/kubernetes-setup.html#kind"}},[t._v("kind")]),t._v("가 있습니다.")],1),t._v(" "),a("p",[t._v("대부분의 환경에서 사용할 수 있고 간편하며, 무료인 "),a("RouterLink",{attrs:{to:"/prepare/kubernetes-setup.html#minikube"}},[t._v("minikube")]),t._v("를 추천하지만 설치할 수 없거나 사양이 낮은 경우엔 저렴한 비용으로 테스트할 수 있는(1,000원 이하) "),a("RouterLink",{attrs:{to:"/prepare/kubernetes-setup.html#k3s"}},[t._v("k3s")]),t._v("를 추천합니다.")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("주의")]),t._v(" "),a("p",[t._v("개발환경과 운영환경의 가장 큰 차이점은 개발환경은 단일 노드로 여러 노드에 스케줄링하는 테스트가 어렵고 LoadBalancer와 Persistent Local Storage 또한 가상으로 만들어야 합니다.\n이러한 실습을 정확하게 하려면 운영환경(멀티노드)에서 진행해야 합니다.")])]),t._v(" "),a("h2",{attrs:{id:"minikube"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minikube"}},[t._v("#")]),t._v(" minikube")]),t._v(" "),a("p",[t._v("쿠버네티스 클러스터를 실행하려면 최소한 scheduler, controller, api-server, etcd, kubelet, kube-proxy를 설치해야 하고 필요에 따라 dns, ingress controller, storage class등을 설치해야 합니다. 쿠버네티스는 설치 또한 중요한 과정이지만 처음 공부할 땐 설치보단 실질적인 사용법을 익히는 게 중요합니다.")]),t._v(" "),a("p",[t._v("이러한 설치를 쉽고 빠르게 하기 위한 도구가 "),a("a",{attrs:{href:"https://github.com/kubernetes/minikube",target:"_blank",rel:"noopener noreferrer"}},[t._v("minikube"),a("OutboundLink")],1),t._v("입니다. minikube는 windows, macOS, linux에서 사용할 수 있고 다양한 가상 환경(Hyperkit, Hyper-V, Docker, VirtualBox등)을 지원하여 대부분의 환경에서 문제없이 동작합니다.")]),t._v(" "),a("p",[a("strong",[t._v("준비")])]),t._v(" "),a("ul",[a("li",[t._v("2 CPUs or more")]),t._v(" "),a("li",[t._v("2GB of free memory")]),t._v(" "),a("li",[t._v("20GB of free disk space")])]),t._v(" "),a("h3",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" windows")]),t._v(" "),a("p",[a("strong",[t._v("설치")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/kubernetes/minikube/releases/latest/download/minikube-installer.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("minikube-installer.exe"),a("OutboundLink")],1),t._v("파일을 다운로드합니다.")]),t._v(" "),a("p",[a("strong",[t._v("Hyper-V 활성화")])]),t._v(" "),a("p",[t._v("관리자 권한으로 "),a("code",[t._v("CMD(명령프롬프트)")]),t._v(" 실행후 다음 명령어를 입력합니다.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("지원확인")]),t._v(" "),a("p",[t._v("Windows 10 Enterprise, Pro, or Education에서 Hyper-V를 지원합니다. 그 외에는 virtual box를 이용해주세요.")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("DISM /Online /Enable-Feature /All /FeatureName:Microsoft-Hyper-V\n")])])]),a("p",[t._v("활성화 후 사용 유/무 설정하기")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 끄기")]),t._v("\nbcdedit /set hypervisorlaunchtype off\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 켜기")]),t._v("\nbcdedit /set hypervisorlaunchtype auto\n")])])]),a("p",[a("strong",[t._v("기본 명령어")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 버전확인")]),t._v("\nminikube version\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 가상머신 시작 (반드시 관리자권한으로 실행)")]),t._v("\nminikube start --driver"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("hyperv\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# driver 에러가 발생한다면 virtual box를 사용")]),t._v("\nminikube start --driver"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("virtualbox\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 특정 k8s 버전 실행")]),t._v("\nminikube start --kubernetes-version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("v1.20.0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 상태확인")]),t._v("\nminikube status\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 정지")]),t._v("\nminikube stop\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 삭제")]),t._v("\nminikube delete\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ssh 접속")]),t._v("\nminikube "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ip 확인")]),t._v("\nminikube "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Docker Desktop")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("설치버전")]),t._v(" "),a("p",[t._v("Docker Desktop 3.0.0 + WSL2 환경에서 테스트하였습니다.")])]),t._v(" "),a("p",[t._v("Docker Dekstop이 설치되어 있으면 minikube가 기본으로 "),a("code",[t._v("docker")]),t._v(" driver를 사용합니다. docker 드라이브러를 사용할 경우 서비스 노출 방법입니다.")]),t._v(" "),a("p",[t._v("샘플로 테스트한 wordpress의 쿠버네티스의 노출 포트는 31428이지만 접근하기 위해서는 "),a("code",[t._v("minikube service")]),t._v("명령어를 입력하고 프록시를 통해 접속해야 합니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 쿠버네티스 서비스 이름이 wordpress라면..")]),t._v("\nminikube "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" wordpress\n")])])]),a("p",[a("strong",[t._v("실행 결과")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("|-----------|-----------|-------------|---------------------------|\n| NAMESPACE |   NAME    | TARGET PORT |            URL            |\n|-----------|-----------|-------------|---------------------------|\n| default   | wordpress |          80 | http://192.168.49.2:31428 |\n|-----------|-----------|-------------|---------------------------|\n   Starting tunnel for service wordpress.\n|-----------|-----------|-------------|------------------------|\n| NAMESPACE |   NAME    | TARGET PORT |          URL           |\n|-----------|-----------|-------------|------------------------|\n| default   | wordpress |             | http://127.0.0.1:58969 |\n|-----------|-----------|-------------|------------------------|\n   Opening service default/wordpress in default browser...\n❗  Because you are using a Docker driver on windows, the terminal needs to be open to run it.\n")])])]),a("p",[a("code",[t._v("minikube service")]),t._v("를 실행한 상태에서 "),a("s",[t._v("127.0.0.1:31428")]),t._v("이 아닌 127.0.0.1:58969로 접속합니다.")]),t._v(" "),a("h3",{attrs:{id:"macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[t._v("#")]),t._v(" macOS")]),t._v(" "),a("p",[a("strong",[t._v("설치")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# homebrew를 사용하고 있다면..")]),t._v("\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" minikube\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# homebrew를 사용하지 않는다면, 직접 binary 다운로드")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x minikube\n")])])]),a("p",[a("strong",[t._v("기본 명령어")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 버전확인")]),t._v("\nminikube version\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 가상머신 시작")]),t._v("\nminikube start --driver"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("hyperkit\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# driver 에러가 발생한다면 virtual box를 사용")]),t._v("\nminikube start --driver"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("virtualbox\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 특정 k8s 버전 실행")]),t._v("\nminikube start --kubernetes-version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("v1.20.0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 상태확인")]),t._v("\nminikube status\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 정지")]),t._v("\nminikube stop\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 삭제")]),t._v("\nminikube delete\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ssh 접속")]),t._v("\nminikube "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ip 확인")]),t._v("\nminikube "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v("\n")])])]),a("h3",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" linux")]),t._v(" "),a("p",[a("strong",[t._v("설치")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker 사용시 설치 필요, docker를 사용하지 않는 경우 virtual box 설치")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://get.docker.com/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -aG docker "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$USER")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker 대신 virtual box 설치")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" virtualbox\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install minikube")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x minikube\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /usr/local/bin/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" minikube /usr/local/bin/\n")])])]),a("p",[a("strong",[t._v("기본 명령어")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 버전확인")]),t._v("\nminikube version\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 가상머신 시작")]),t._v("\nminikube start --driver"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("docker\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# driver 에러가 발생한다면 virtual box를 사용")]),t._v("\nminikube start --driver"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("virtualbox\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 특정 k8s 버전 실행")]),t._v("\nminikube start --kubernetes-version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("v1.20.0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 상태확인")]),t._v("\nminikube status\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 정지")]),t._v("\nminikube stop\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 삭제")]),t._v("\nminikube delete\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ssh 접속")]),t._v("\nminikube "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ip 확인")]),t._v("\nminikube "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v("\n")])])]),a("h3",{attrs:{id:"virtualbox-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox-설치"}},[t._v("#")]),t._v(" VirtualBox 설치")]),t._v(" "),a("p",[t._v("OS에서 지원하는 가상화 기능을 사용할 수 없는 경우 "),a("code",[t._v("VirtualBox")]),t._v("를 설치합니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(451),alt:"virtualbox.org"}})]),t._v(" "),a("p",[a("code",[t._v("Download")]),t._v("버튼을 눌러서 설치합니다.")]),t._v(" "),a("h2",{attrs:{id:"k3s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#k3s"}},[t._v("#")]),t._v(" k3s")]),t._v(" "),a("p",[t._v("minikube를 사용할 수 없거나 네트워크등 여러가지 이슈로 실습이 어려운 경우, 별도 클라우드 서버에 k3s를 설치하여 원격으로 실습할 수 있습니다.")]),t._v(" "),a("p",[t._v("여기선 "),a("a",{attrs:{href:"https://aws.amazon.com/ko/free/compute/lightsail",target:"_blank",rel:"noopener noreferrer"}},[t._v("AWS Lightsail"),a("OutboundLink")],1),t._v("에 설치하는 법을 소개하며 한 달 동안 가상머신을 사용했을 때 $20, 하루 동안 실습할 경우 1,000원 이하의 비용이 발생합니다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("설치스크립트에 브라우저 기반 터미널 프로그램인 "),a("a",{attrs:{href:"https://github.com/butlerx/wetty",target:"_blank",rel:"noopener noreferrer"}},[t._v("wetty"),a("OutboundLink")],1),t._v("를 포함하여 별도의 프로그램 없이 브라우저로 실습 할 수 있습니다.\n"),a("code",[t._v("vi")]),t._v(", "),a("code",[t._v("nano")]),t._v("와 같은 리눅스용 에디터에 익숙하지 않다면 웹 기반 "),a("a",{attrs:{href:"https://github.com/subicura/workshop-init/blob/master/99_code_server.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio를 설치"),a("OutboundLink")],1),t._v("해 주세요.")])]),t._v(" "),a("ol",[a("li",[t._v("AWS 로그인 후, Lightsail 메뉴를 선택")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(452),alt:"lightsail menu"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("새로운 인스턴스 생성 - Create instance 선택")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(453),alt:"Create instance"}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Linux / Ubuntu 20.04 선택")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(454),alt:"Pick instance"}})]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Add launch script를 선택 후 다음 명령어 입력")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s/PasswordAuthentication no/PasswordAuthentication yes/'")]),t._v(" /etc/ssh/sshd_config\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ubuntu:1q2w3e4r!!"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" chpasswd\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" sshd reload\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sL https://deb.nodesource.com/setup_14.x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" -y update\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DEBIAN_FRONTEND")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("noninteractive "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" -y "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nodejs build-essential\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g wetty --unsafe\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /usr/bin/wetty /usr/local/bin/wetty\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://gist.githubusercontent.com/subicura/9058671c16e2abd36533fea2798886b0/raw/e5d249612711b14c9c8f44798dea1368395e86a9/wetty.service -o /lib/systemd/system/wetty.service\nsystemctl start wetty\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" wetty\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("2 vCPUs / 4 GB 또는 더 나은 사양 선택")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(455),alt:"Choose plan"}})]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("가상 서버 생성이 완료되면 이름 선택")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(456),alt:"Instance detail"}})]),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[t._v("Networking 탭 선택후 방화벽 허용 (4000-65000) "),a("strong",[t._v("SSH(22)는 반드시 제거")])])]),t._v(" "),a("p",[a("img",{attrs:{src:e(457),alt:"Firewall"}})]),t._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[t._v("방화벽 설정 결과")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(458),alt:"Firewall 결과"}})]),t._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[t._v("Public IP 주소와 4200 port로 접속 (아이디/패스워드 - ubuntu/1q2w3e4r!!)")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(459),alt:"wetty"}})]),t._v(" "),a("ol",{attrs:{start:"10"}},[a("li",[t._v("k3s 설치")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sfL https://get.k3s.io "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" ubuntu:ubuntu /etc/rancher/k3s/k3s.yaml\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 확인")]),t._v("\nkubectl get nodes\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 설정 복사")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" /etc/rancher/k3s/k3s.yaml ~/.kube/config\n")])])]),a("h2",{attrs:{id:"그외"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#그외"}},[t._v("#")]),t._v(" 그외")]),t._v(" "),a("h3",{attrs:{id:"docker-for-desktop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-for-desktop"}},[t._v("#")]),t._v(" docker for desktop")]),t._v(" "),a("p",[t._v("docker for desktop에서 쿠버네티스 클러스터를 활성화할 수 있습니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(460),alt:"Docker for desktop"}})]),t._v(" "),a("p",[t._v("docker for desktop은 리소스(CPU, 메모리)를 많이 차지하기 때문에 가급적 실습할 때 껐다 켜기 쉬운 minikube를 추천합니다.")]),t._v(" "),a("h3",{attrs:{id:"kind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kind"}},[t._v("#")]),t._v(" kind")]),t._v(" "),a("p",[t._v("도커 컨테이너 기반 다중 노드 테스트")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://kind.sigs.k8s.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("kind"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"운영환경"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#운영환경"}},[t._v("#")]),t._v(" 운영환경")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/",target:"_blank",rel:"noopener noreferrer"}},[t._v("kubeadm"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/kubernetes-sigs/kubespray",target:"_blank",rel:"noopener noreferrer"}},[t._v("kubespray"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://aws.amazon.com/ko/eks",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon EKS"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://cloud.google.com/kubernetes-engine",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Kubernetes Engine"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/ko-kr/azure/aks/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Kubernetes Service"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);