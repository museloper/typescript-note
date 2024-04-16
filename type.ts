// string
// 문자열
let str: string = 'hi'

// number
// 숫자
let num: number = 10

// boolean
// 진위
let isLoggedIn: boolean = false

// Array
// 배열
let arr: number[] = [1, 2, 3]
let array: Array<number> = [1, 2, 3]

// tuple
let tuple: [string, number] = ['hi', 10]

// Enum
// C, Java 같은 언어에서 흔하게 쓰이는 타입으로 특정 값(상수)들의 집합을 의미한다.
enum Avengers {
  Capt,
  IronMan,
  Thor,
}

let hero: Avengers = Avengers.Capt

// any
// 아.무.거.나.
let str2: any = 'hi'
let num2: any = 10
let arr2: any = ['a', 2, true]

// void
// 반환 값이 없는 경우
function printSomething(): void {
  console.log('something')
}

// never
// 함수의 끝에 도달하지 않는다는 의미
function neverEnd(): never {
  while (true) {}
}
