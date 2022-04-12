# 기초 Flask 어플리케이션 작성&route(’/’) (1)

정리한 사람: 한우성

# 기본 Flask 어플리케이션 작성

```python
# 기본 Flask 어플리케이션 작성
from flask import Flask  

app = Flask(__name__)  

@app.route('/')  
def Hello_flask():
    return 'Hello Flask'

if __name__ == '__main__':  
    app.run(host='0.0.0.0', debug=True)  
```

## 1. Import Flask / app

```python
1. from flask import Flask  

2. app = Flask(__name__)
 # Flask 객체 생성 -> **name** 입력 -> app 객체에 Flask 할당
```

## 2. @app.route(’/’) / def ~~~

```python
@app.route('/')
# 생성한 app 객체의 함수 루트를 설정 ('/': 메인페이지)
  
def Hello_flask():
    return 'Hello Flask'
# 설정한 루트에 따라 ('/') Hello_flask()함수가 실행 됨.
```

## 3. __name__ == '__main__'

```python
if __name__ == '__main__':
# 해당 코드를 실행할 경우 __name__ => __main__으로 변경됨(if문 통과)  
    app.run(host='0.0.0.0', debug=True)
# Flask 웹 어플리케이션 실행 메소드 = run()
```

## 4. run(host? / debug ?)

 

```python
app.run(host='0.0.0.0', debug=True)

# host(ex: 0.0.0.0, 127.0.0.1, ...)
# 해당 웹 서비스로 접근을 허용하는 IP 혹은 Domain을 적을 수 있다. 
# 예를 들어(127.0.0.1)를 보내면 웹 서버를 실행시킨 해당 PC 외에는 접속이 불가능하지만, 
# 모든 IP를 뜻하는(0.0.0.0)을 보내면 외부에서도 접속이 가능.

# debug(True or False)
# 해당 옵션을 True로 보내주면, 웹 서버가 실행 중에 코드가 변경되어도 해당 작업을 
# 그대로 반영시킨다. 실제로 개발 중에 구현 현황을 실시간으로 확인할 수 있어 엄청 편리하다. 
# 아무 인자도 주지 않을 경우, False 인자로 보내진다.
```

![결과](%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20Flask%2045ba2/1.png)

결과

# 다양한 @app.route(’/’)

```python
@app.route('/post') 
def post():
    return "<h1>Post<h1>"
# 위에 있는 @app.route를 기준으로 아래의 함수가 실행 됨.
```

![결과](%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20Flask%2045ba2/2.png)

결과

```python
@app.route('/post/<username>') 
# <변수이름> 지정 가능 
def Username(username):
    return "my name is : " + username
```

![결과](%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20Flask%2045ba2/3.png)

결과

```python
@app.route('/post/<int:post_id>') 
# <변수이름>에 데이터 타입 설정 가능
def Intname(post_id):
    return "my post_id is : %d " % post_id
```

![5.PNG](%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20Flask%2045ba2/5.png)

## Python Flask 의 변수 사용 방법

```python
@app.route('/post/<username>') # <변수이름> 지정 가능 
def Username(username):
    return "my name is : %s " % username

@app.route('/post/<int:post_id>') # <변수이름>에 데이터 타입 설정 가능
def Intname(post_id):
    return "my post_id is : %d " % (post_id)
# return 시 % 기호를 사용해야 오류 발생 X
```

![4.PNG](%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20Flask%2045ba2/4.png)

### Code

```python
from flask import Flask  

app = Flask(__name__)  

@app.route('/')                  
def Hello_flask():
    return 'Hello Flask'

@app.route('/post') 
def post():
    return "<h1>Post<h1>"    

@app.route('/post/<username>')  
def Username(username):
    return "my name is : " + username

@app.route('/post/<int:post_id>') 
def Intname(post_id):
    return "my post_id is : %d " % post_id    

if __name__ == '__main__':  
    app.run(host='0.0.0.0', debug=True)  
```

### 참고자료

[[파이썬] %d(정수), %s(문자열)](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=happyrachy&logNo=221224309880)

[[Python] Windows에서 Flask 설치하기](https://forensickelly.tistory.com/entry/Python-Windows%EC%97%90%EC%84%9C-Flask-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0)

[[Python] flask 변수 사용 방법(Variables, string,int,float)](https://scribblinganything.tistory.com/390)