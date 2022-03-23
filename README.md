# 💨Auto Deploy React,Expres,Typescript with heroku

배포주소 : https://auto-test-react-express-typesc.herokuapp.com/

## ‼Stack

<b>React, Express, typescript, eslint</b>

## 느낀 점
<b>express를 사용하여 heroku로 배포할 때</b> server에서 port를 추가하지 않고 임의로 설정한 포트만 listen하게 되면 application error가 발생한다.<br>
따라서, server에서 이렇게 추가해야한다.
```javascript
const PORT = process.env.PORT || 3000;
```
heroku는 윈도우에서 쓰이는 명령어를 알아 듣지 못한다.<br>
ex) 파일을 옮기는 상황 가정<br>
package.json => move라는 명령어를 이용하여 파일을 옮기라고 했을 때 해당 명령어를 알아듣지 못하고 error가 나게된다.<br>
따라서 mv 리눅스에서 사용하는 명령어를 사용해야 한다.

다들 화이팅😁
