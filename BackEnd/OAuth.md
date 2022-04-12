# OAuth

## **OAuth 란**

![img_naverid01.png](OAuth%202d8f8/img_naverid01.png)

▪**외부 서비스에서도 인증**을 가능하게 하고 **그 서비스의 API를 이용**하게 해주는 것

이것을 바로 **OAuth**라고 합니다.

▪즉, **인증**(Authentication) 과 **권한**(Authorization) 을 흭득 하는 것.

## **OAuth의** 배경

▪third party Application에 아이디와 비밀번호를 제공하고 싶지 않은 요구

⇒Application이 안전하다는 보장이 없다.

⇒개인정보를 여러 곳에 입력하면서 피싱 위험 증가.

### =⇒OAuth 1.0의 탄생

## OAuth 1.0 (2007)

![oauth2_triangle2.png](OAuth%202d8f8/oauth2_triangle2.png)

▪ **3-legged-auth**

⇒웹 애플리케이션이 아닌 애플리케이션에서는 사용하기 곤란.

⇒절차가 복잡하여 OAuth 구현 라이브러리를 제작하기 어려움.

⇒복잡한 절차 때문에 Service Provider에게도 연산 부담.

⇒HMAC을 통해 암호화를 하는 번거로운 과정.

⇒인증토큰(access token)이 만료되지 않음.

### =⇒OAuth 2.0의 탄생

## OAuth 2.0 (2010)

⇒ 웹 애플리케이션이 아닌 애플리케이션 지원 강화

⇒ 암호화가 필요 없음 HTTPS를 사용하고 HMAC을 사용하지 않는다.

⇒ Siganature 단순화 정렬과 URL 인코딩이 필요 없다.

⇒ OAuth 2.0에서는 보안 강화를 위해 Access Token의 Life-time을 지정할 수 있도록 했다.

⇒ api서버에서 인증서버를 분리 할 수 있도록 해 놓았다

### 인증종류

1. Authorization Code Grant
2. Implicit Grant
3. Resource Owner Password Credentials Grant
4. Client Credentials Grant

**1.  Authorization Code Grant**

![다운로드 (1).png](OAuth%202d8f8/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C_(1).png)

- 서버사이드 코드로 인증하는 방식
- 권한서버가 클라이언트와 리소스서버 간의 중재역할.
- Access Token을 바로 클라이언트로 전달하지 않아 잠재적 유출을 방지.
- 로그인시에 페이지 URL에 response_type=code 라고 넘긴다.
    
    ![@img_guide2.jpg](OAuth%202d8f8/img_guide2.jpg)
    

- 출처

[https://www.youtube.com/watch?v=hm2r6LtUbk8](https://www.youtube.com/watch?v=hm2r6LtUbk8)

[OAuth 란 무엇일까](https://showerbugs.github.io/2017-11-16/OAuth-%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)

[OAuth 2.0 개념 정리](https://hwannny.tistory.com/92)

[NAVER D2](https://d2.naver.com/helloworld/24942)