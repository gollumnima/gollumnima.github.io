---
title: "wecode 1주차_2일 TIL_CSS(1)"
date: "2019-07-30T22:12:03.284Z"
template: "post"
draft: false
slug: "/posts/wecode1_2_TIL_css/"
category: "HTML/CSS"
tags:
  - "wecode"
  - "codingbootcamp"
  - "css"
  - "위코드"
description: "위코드 2일차 CSS 정리 1탄. CSS란 Cascading Stytle Sheet의 줄임말로, 다이어리 꾸미기 하듯이 밋밋한 우리의 html을 아름답게 꾸며주는 친구칭구"
---

# CSS(Cascading Stytle Sheet)
Cascade를 찾아보니 폭포, 쏟아지는 것 뭐 이런 뜻이였는데 뜻에 너무 큰 의미를 두지 맙시다...
우리가 html로 설계도를 짰으면 css로 색칠하고 예쁘게 꾸며주는 작업이 필요해용


### 1. CSS 적용방법
* 인라인 스타일 :html 태그 안에 직접적으로 적용하는 방법쓰

예를 들어, span과 p에 색깔을 입혀볼게요(둘의 차이점을 보여주기 위해 하는 작업쓰)
`    <span style="background-color : skyblue">곧있으면 점심시간 아싸리</span>`
   ` <p style="background-color : skyblue">곧있으면 점심시간 아싸리</p>`
   이렇게 치면 어떤 결과가 나올까요
   
![aslkjfd.PNG](https://images.velog.io/post-images/dooreplay/b87c11c0-b274-11e9-944d-395be74d9f35/aslkjfd.PNG)

인라인 스타일로 글자에 배경색을 입혀봤는데 `span`은 스판끼가 없어서 딱 글자만큼만, `p`는 그 문장 전체에 색을 다 입혀줬슴다
저는 주로 CSS파일을 만들어 쓰는데, 인라인 스타일로 쓰면 적용이 제일 확실하게 된다네요!?
점수제가 있더라고요 몰랐는데 와우...!!!! 고건 밑에서 다시 설명쓰..☆

* Style 태그 :말 그대로 html 내부에 `<style>` 태그 적용하는 것. 이렇게.

```
    <span>곧있으면 점심시간 아싸리</span>

    <style>
      span {
        color: #408090;
      }
    </style>
```
(아까는 background-color를 입혀서 배경색을 채워줬는데.. 걍 컬러를 쓰면 글자색이 바뀝니당
적용은 이렇게 뙇!)
![캡처123454.PNG](https://images.velog.io/post-images/dooreplay/b4c9c4e0-b284-11e9-9878-3be49a983fcd/캡처123454.PNG)

* CSS 파일 만들기 ☞★강추방법! 젤 깔끔쓰~
우리가 html 파일 만들어줬던것처럼 아무파일명.css 해서 css 파일을 하나 만들어줍시다
CSS 파일을 html에 적용시키려면 ↖너와↘나의↗연결↘고리↗가 필요하겠죠?

html `<title>` 밑에다가 `<link href="index.css" rel="stylesheet" type="text/css" />` 이거 붙여줘용. 링크 흐르엪 옆에다가 만든 css 파일 이름를 써줍니다. 저 태그들은 다 무슨뜻이냐.. 봅시다

-link : css파일의 링크를 나타내는 태그.
-href : css파일 경로를 나타내는 속성값
-type : link 태그로 연결되는 파일이 뭐신지 알려줌. 항상 type 값은 'text/css'래용
-rel : html과 css파일의 관계를 설명한다는데.. 얘도 항상 'stylesheet'에용

그럼 어케 쓰냐.. 작성법은 아래 2번에서 다시~~

### 2. CSS 작성법
* selector자리에 태그이름 쓰기 
![lalala.PNG](https://images.velog.io/post-images/dooreplay/08fd24e0-b2c5-11e9-9a46-ed26791597e3/lalala.PNG)(사진출처 : WECODE Repl.it)
그림을 새로 만들까 하다가... 시간 아끼려고 퍼온 사진쓰...☆ 이해해주시겠져..? 열심히 할게요ㅠㅠ
```
p {
  color : yellow;
  background-color : black; 
```
저기 selector 자리에 div나 span,p와 같은 태그 이름을 쓸 수 있어요.
중괄호 열어서 왼쪽에는 주고 싶은 효과 쓰고, 오른쪽에는 그 효과에서 색을 뭘로 줄건지 등등 디테일한 값들을 넣어줍시다~ 
객체랑 비슷하게 생겼지만 객체처럼 컴마 찍지 말고 땀방울을 찍어주세요. 열심히 CSS로 꾸미면 고생한만큼 땀이 날거 아니에요? ㅎ 기억하세요 땀방울;;;;^^;;;;;

* selector자리에 id/class이름 쓰기
id는 #, class는 . 쓰세요~ 
```
//chicken이라는 id값을 가진 애한테 글씨색 갈색으로 입혀주기
#chicken{
	color: brown;
}
```
```
//macaron이라는 class값을 가진 애들한테 글씨색 하늘색으로 입혀주기
.macaron{
	color: skyblue;
}
```
class는 동명이인이 많으니깐, CSS파일에서 `macaron` 색깔을 하늘색으로 지정해주면, html 나라의 김마카롱, 박마카롱, 최마카롱 등등 오둥이잡둥이 class이름이 마카롱인 친구들은 다 하늘하늘해지겠져~ XD 한방에 작업할수 있으니까 개이득!



---
요 밑에서부턴 CSS를 전부 다 정리하려는 욕심을 접고... 제가 자주 헷갈리는 부분들과 중요해 보이는 애들만 정리하겠슴다

### ● margin과 padding : 여백의 미
둘의 차이를 비교하기 전에 그림을 먼저 보고 가실게요.
![image.png](https://images.velog.io/post-images/dooreplay/b518de60-b2c8-11e9-84d6-5f50704416a6/image.png)

>margin : 외부 여백 
border : 테두리
padding : 내부 여백

이렇게만 보면 쪼꼼 헷갈릴수도 있으니 코드와 그림을 같이 봅시다

```
.one {
  background-color: yellow; //배경 색깔
  text-align: center; // 가운데정렬
  width: 200px; //가로너비
}

.two {
  background-color: paleturquoise;
  text-align: center;
  width: 200px;
}

.three {
  background-color: blue;
  text-align: center;
  width: 200px;
}
```
![image.png](https://images.velog.io/post-images/dooreplay/42f857f0-b32e-11e9-94fc-df00913fc39f/image.png)

요런 박스 3개가 있습니다. 이제 효과를 줘볼거에요
```
.one {
  background-color: yellow;
  text-align: center;
  width: 200px;
  margin: 50px 50px;
}

.two {
  background-color: paleturquoise;
  text-align: center;
  width: 200px;
}

.three {
  background-color: blue;
  text-align: center;
  width: 200px;
  padding: 50px 50px;
}
```
one에는 margin을 50px을, two는 가만히 냅뒀고, three에는 padding을 50px 줬어요
과연 결과는????? 두구두구두구두구두구두~
![image.png](https://images.velog.io/post-images/dooreplay/e919a3f0-b32e-11e9-a24a-5b58c5102a80/image.png)
1번과 2번은 가로길이는 동일하지만, 1번이 멀찍이 떨어지게 됐어요.
3번은 padding 값을 줘서 크기는 커졌지만, margin값이 없기 때문에 2번과 붙어있져~

★꿀팁 하나 더!
`.two {
  padding: 10px 20px;
}
`이거랑 `.two {
  padding: 10px 20px 10px 20px;
}`이거랑 같다는 사실!
저는 이번에 처음 알았어요 ㅋㅋㅋㅋ 유레카~~
젤 왼쪽부터 순서대로 위↑오른쪽→아래↓왼쪽← 시계방향으로 돌아간다고 생각하심 됩니다!!

### box-sizing
아까 세 개의 box를 보면 width는 동일하게 200px로 줬지만 padding값을 준 애는 혼자 너무 커진걸 확인할 수 있었죠! 아직 코딩 병아리라.. 예시가 적절한지는 사실 잘 모르겠어요 ㅠㅠ
여튼.... 눈으로 보이는 width와 실제 width가 다를 경우, 우리는 이 사이즈를 맞춰줘야해욧

각각의 selector에 `box-sizing: border-box;` 이 속성을 추가해줘도 좋지만...
우리가 거대한 웹 페이지를 만들땐 일일히 추가하기 힘들겠져!!!!
그래서 꼼수가 있슴다... 
바로 이것이죠 `* {
  box-sizing: border-box;
}`
이렇게 *하고 중괄호 열면 모든 태그에 적용할 수 있다네요! 꼭 알아두셔용 ~.~
![image.png](https://images.velog.io/post-images/dooreplay/d6a8ee10-b333-11e9-b6c6-c5c426422d48/image.png)
추가하면 이렇게 모든 박스의 크기가 같아집니다. 우와~~~!


### 상속과 Grouping
* 상속
js에서 prototype에 상속이라는 성질이 있듯이, CSS에도 있습니다!
부모가 가진 스타일을 자식이 물려받는거죠...예시로 확인해볼게요~~

```
    <div class="parent">
      <div class="one">난 자식</div>
      <div class="two">나도 자식</div>
    </div>
    <p class="alone">난 혼자 ㅠㅠ</p>
```
body 태그 안에 이런 애들이 있어요. CSS 값들은 아래와 같이 줘볼게용
```
.parent {
  background-color: blueviolet;
  width: 200px;
}

.one {
}

.two {
}

.alone {
  background-color: gainsboro;
  width: 400px;
}
```
자식들한텐 어떠한 값도 주지 않았고, one과 two를 감싸는 parent라는 class를 가진 div에만 값을 줘봤어요! class가 alone인 div에도 다른 값을 설정해줬구요
![image.png](https://images.velog.io/post-images/dooreplay/03ee5e30-b336-11e9-a5b8-a90d45f2a15e/image.png)
결과는 이렇게 뙇! 칫솔 모양이네요. 다들 양치 열심히 하세요! 치과 무섭잖아요
근데 매번 태그마다 값을 일일히 주기 귀찮잖아여.. 값을 다 통일하고 싶다! 그렇땐

* Grouping
그룹으로 묶어버리는 방법이 있어요. 이렇게
`.parent, p {
  background-color: blueviolet;
  width: 200px;
}` 이렇게 parent div와 p 태그를 ,로 묶어주면
![image.png](https://images.velog.io/post-images/dooreplay/7872dbf0-b336-11e9-a63f-3d4fbc7abc6c/image.png)
CSS값이 이렇게 동일하게 먹힙니다! 오오~~

### CSS selector의 우선순위
CSS를 작성하는 법 세 가지에 대해서 위에서 다뤄봤는데요, 각 방법마다 일정한 점수가 부여되서 그 점수가 높은 애들이 좀 더 권력자가 될 수 있어요!

>인라인 : 1000점
id : 100점
class:  10점
tag : 1점

와우..... 저는 인라인 방법이 태그를 더럽힌다고(?) 생각해서 젤 점수가 낮을줄 알았는데 반전쓰..!
근데 우리가 수학자도 아니고.. 점수를 일일히 계산하기보단 그냥 대충 이렇다! 하고 알고있음 좋을 것 같습니다~
지난번에 말했던 것처럼 id를 너무 남발하지만 않는다면 점수는 대충 비슷해질것 같아요!

예시를 안 보고 넘어가면 섭하겠죠? 먼저 CSS파일엔 이렇게
```
.parent {
  background-color: blueviolet;
  width: 200px;
  font-size: 30px;
}

.alone {
  background-color: gainsboro;
  width: 400px;
  font-size: 30px;
}

```
parent 클래스와 alone 클래스에 모두 font-size 30px이라는 값을 준 상태.
인라인의 권력을 시험해보기 위해 html 태그도 함 볼게요
```
    <div class="parent">
      <div class="one">난 자식</div>
      <div class="two">나도 자식</div>
    </div>
    <p class="alone" style="font-size: 100px;">난 혼자 ㅠㅠ</p>
```
html바디를 살펴보시면 alone 클래스를 가진 p에 인라인으로 font-size 100px를 줬어요
결과는 과연!!! 두구두구두구두굳구ㅜ둑두구두구~~
![image.png](https://images.velog.io/post-images/dooreplay/168e5d40-b338-11e9-a63f-3d4fbc7abc6c/image.png)
분명 CSS에서 같은 글씨 크기로 설정했지만, 100px의 효과를 준 인라인방식이 더 우세한걸 알수 있습니다! 라인을 잘 타라는 말이 괜히 있는게 아니였네요... 무서운 세상!


---

포스팅이 너무 길어지는 것 같아 이번판은 여기서 끝! 안그래도 말많은 블로그라 여기서 줄여용
아직도 위코드 1일차 후기가 안 끝났다니.... 큰일쓰...☆
