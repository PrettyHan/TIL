# Atomic Operation

![スクリーンショット 2022-05-16 151421.png](Atomic%20Operation/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2022-05-16_151421.png)

## Atomic Operation (원자성)

공유되는 변수를 변경할 때, **기존의 값을 기반으로 하여**
새로운 값이 결정되는 과정에서 여러 Thread가 이를 동시에 수행할 때 생기는 이슈를 부르는 명칭

⇒ 연산의 단일성 혹은 단일 연산

```jsx
i++ // Non Atomic Opeartion

int count = 0; // Atomic Opeartion

count++; // Non Atomic Opeartion

// i의 기존 값을 읽는다. (READ)
// i에 1을 더한다. (MODIFY)
// i의 값을 변수에 할당한다. (WRITE)
```

-이를 두개 Thread가 동시에 100회 수행한다고 했을 때- (i++)

**원자성** 을 가지고 있는 연산 ⇒ 200

실제 ⇒ 200보다 작은 값

i++이 3개의 instruction(READ-MODITY-WRITE)로 구성되어있기 때문

Thread-1이 값을 읽어 i+1을 하기 직전에 Thread-2가 i를 읽어 i+1을 수행하고 

반영하는 동작을 수행한다면 **후자의 연산은 무효가 되는 현상.**

![スクリーンショット 2022-05-16 154718.png](Atomic%20Operation/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2022-05-16_154718.png)

![スクリーンショット 2022-05-16 154822.png](Atomic%20Operation/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2022-05-16_154822.png)

## ****Atomics.add()****

정적 메서드  `Atomics.add()`
⇒ 배열의 지정된 위치에 지정된 값을 추가

⇒ 해당 위치의 이전 값을 반환합니다. 

⇒ 수정된 값을 다시 쓸 때까지 다른 쓰기가 발생하지 않도록 합니다.

### `Atomics.add(typedArray, index, value)`

**`typedArray:**[Int8Array`](https://runebook.dev/ko/docs/javascript/global_objects/int8array) , `[Uint8Array`](https://runebook.dev/ko/docs/javascript/global_objects/uint8array) , `[Int16Array`](https://runebook.dev/ko/docs/javascript/global_objects/int16array) , `[Uint16Array`](https://runebook.dev/ko/docs/javascript/global_objects/uint16array) , `[Int32Array`](https://runebook.dev/ko/docs/javascript/global_objects/int32array) , `[Uint32Array](https://runebook.dev/ko/docs/javascript/global_objects/uint32array)`

**`index`:** `value` 을 추가 할 `typedArray` 의 위치입니다 .

**`value`:** 값

⇒범용 고정 길이 바이너리 데이터  버퍼를 표현하는 ********SharedArrayBuffer 객체와 함께 사용

```jsx
const buffer = new SharedArrayBuffer(16);
const unit8 = new Uint8Array(buffer);

unit8[0] = 10; // 0번 index 에 값 추가
console.log(Atomics.add(unit8, 0, 5)); // 10
console.log(unit8[0]) // 10 + 5 = 15
console.log(Atomics.load(unit8, 0)) // 15
```

![スクリーンショット 2022-05-16 155908.png](Atomic%20Operation/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2022-05-16_155908.png)

![スクリーンショット 2022-05-16 155946.png](Atomic%20Operation/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2022-05-16_155946.png)

[[Java] Concurrent Programming - 가시성과 원자성](https://velog.io/@syleemk/Java-Concurrent-Programming-%EA%B0%80%EC%8B%9C%EC%84%B1%EA%B3%BC-%EC%9B%90%EC%9E%90%EC%84%B1)

[Atomics - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Atomics)

[모던 자바스크립트 핵심 가이드](https://books.google.co.kr/books?id=jl4wEAAAQBAJ&pg=PA191&dq=Atomics.add()+%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8&hl=ko&sa=X&ved=2ahUKEwiywJSgueP3AhUBGqYKHd8_CfAQ6AF6BAgIEAI#v=onepage&q=Atomics.add()%20%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8&f=false)