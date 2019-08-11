---
title: "wecode 1주차_3일 TIL_CSS"
date: "2019-07-31T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/wecode1_3_TIL_css/"
category: "HTML/CSS"
tags:
 - "wecode"
 - "codingbootcamp"
 - "css"
 - "위코드"
description: "위코드 3일차 CSS 정리 2탄. list, table, input/textarea에 대해 정리해보았다!"
---

DOM으로 빨리 넘어가야 하는데... DOM 너무 무섭고요.....
그래서 정리해보는 wecode 1일차 TIL - CSS 2탄! 오늘로 벌써 5일찬데 임시저장 해놓은 1일차 쓰고있슴다..OTL... 시간 넘나 빠른것....

>오늘의 명언 : 무슨일이 있어도 블로깅은 절대 밀리지 말자!
---
### List
list에서 기억할 것은 `<li>` 그리고`<ol>`과 `<ul>`입니다! 코드와 그림을 먼저 살펴보아요!
```
    <ol>
      <li>하나</li>
      <li>두울</li>
      <li>세엣</li>
      <li>네엣</li>
      <li>다스</li>
      <li>여스</li>
      <li>일곱</li>
      <li>여덟</li>
    </ol>
```
![image.png](https://images.velog.io/post-images/dooreplay/99ba52e0-b33e-11e9-a5b8-a90d45f2a15e/image.png)

* ol : Orderd List의 줄임말로 순서가 있는 list를 만들때 쓰시면 됩니당. 이렇게 번호가 뙇!

![image.png](https://images.velog.io/post-images/dooreplay/02dde980-b33f-11e9-a50a-67208960cf89/image.png)
* ul : UnOrdered List의 줄임말로 순서없이 점 띡! 찍는 list를 만들때 쓰면 돼용

근데 리스트 형식인데 점을 없애고 싶다? 그러면 css파일에 `ul {
  list-style: none;
}` 추가고고
![image.png](https://images.velog.io/post-images/dooreplay/267bcd30-b33f-11e9-a5b8-a90d45f2a15e/image.png)
짠~ 점들이 없어졌어요 오예!!
근데 가끔 제가 벨로그에 쓰는것처럼
>이런 효과를 주고 싶다면!! 이것도 가능합니다

```
ul {
  list-style: none;
  border-left: 3px solid grey; // 젤 왼쪽에 선 효과 주기
  padding: 15px; // 이걸 안 쓰면 너무 떨어져있게 되니까 적절히 떨어지도록 padding 추가
}
```
![image.png](https://images.velog.io/post-images/dooreplay/0434f890-b340-11e9-a50a-67208960cf89/image.png)사진을 왼쪽 정렬 하는 방법을 몰라서 그런데, 이거 왼쪽 벽에 딱 붙어있는 이미지랍니다!

위에서 border는 테두리를 씌우는 걸 말하는데요. 만약에 border-left가 아닌 border로 값을 설정한다면 사방팔방 회색깔 테두리가 씌워질거에요.

### Table
몰랐는데 CSS로 표도 만들수 있더라고요 대박쓰...!!!!!! 표를 작성하려면 알아둘게 쪼꼼 많아요! `<table>, <thead>, <tbody>, <tr>, <th>, <td>` 하나씩 살펴봅시당

* `<table>` : 표 만들땐 젤 바깥쪽을 이 태그로 감싸줍시다~
* `<tr>` : Table Row의 줄임말. 행의 시작은 이 태그로!
* `<th>` : Table Heading의 줄임말. 열의 시작은 이 태그로!
* `<td>` : Table Data의 줄임말. 표 안쪽에 내용물은 이 태그로 감싸줍시다~
* 셀병합 : colspan이나 rowspan 적절히 사용해보기
  
이렇게만 보면 모르겠으니까 실제로 적용해봅시다!

```
     <table class="border-table"> // 테이블 만들기 시작을 알리는 태그!
      <tr> // 1행 시작
        <th></th> // 1열 시작
        <th>1 pm</th>
        <th>2pm</th>
        <th>3pm</th>
      </tr>
      <tr> // 2행 시작
        <th>Gym</th> //2열 시작
        <td>Dodge ball</td>
        <td>Kick boxing</td>
        <td>Sack racing</td>
      </tr>
      <tr> // 3행 시작
        <th>Exercise Room</th> //3열 시작
        <td>Spinning</td>
        <td class="gray" colspan="2">Yoga marathon</td> // 열 병합(2칸)
      </tr>
      <tr> // 4행 시작
        <th>Pool</th> // 4열 시작
        <td class="gray" colspan="3">Water polo</td> // 열 병합(3칸)
      </tr>
    </table>
```
html에서 이렇게 작성하면...  
![image.png](https://images.velog.io/post-images/dooreplay/45f04a20-b34d-11e9-a63f-3d4fbc7abc6c/image.png)
요로코롬 표를 완성할수 있어요! 진짜 시간표 같고 그럴듯하죠? 
  
물론 표 안의 색깔이나, 표의 테두리는 다 CSS로 효과를 준거에요
```
  table {
  border-collapse: collapse; // 이걸 안쓰면 표가 조각조각나서 떨어져서 딱 안 붙어있어요~
}

.border-table th,
.border-table td {
  border: 1px solid black; //표 테두리의 굵기와 색깔 입혀주기
}

.gray {
  background-color: gainsboro; //표 칸에 회색으로 색칠해준 것
}```
이렇게 말이죠!
눈팅 금지!! 직접 쳐봐야 좀 더 오래 기억에 남더라구요~~
  
### input과 textarea
둘 다 텍스트를 입력하는 공간이긴 한데 약간의 차이가 있어용
읽어보면 input은 두글자로, textarea 6글자 이상으로 더 길죠?????
짧은 값은 input으로 주고, 긴 값은 textarea로 줍시다..!

* input 타입 알아보기
-type="text" : 어떠한 텍스트나 입력 가능쓰
-type="password" : 비번 입력할때 까만 똥그라미 나오는 원리에요! 와우!!!! 씐기씐기!
-type="number" : 숫자만 입력할 수 있어요. 특수문자 금지!
  
+쁘라스!
placeholder="아무개" : 이걸 input태그 내에 입력하면 입력전에 아무개라는 글자가 떠요.

![image.png](https://images.velog.io/post-images/dooreplay/9edd6040-b34e-11e9-a50a-67208960cf89/image.png)
로그인할 때 자주 볼 수 있는 풍경이죠? ㅋㅋ

### flex
는 다음 기회에......
미니터 구현한 화면과 함께 공개합니다 두둥!
블로깅이 너무너무너무 많이 밀렸어요~~~ 아이고 나살려~~
