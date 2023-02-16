---
external: false
title: Day 1 第一章数组 
description: 704. Binary Search; 27. Remove Element
date: 2023-02-15
---

## 704. Binary Search 

**二分法**：看到 ascending/descending array 就想到二分法

采用左闭右闭区间 [left, right] 的二分法，才有 mid + 1 和 mid - 1 的对称操作

注意二分法 while 循环的条件是 left <= right

注意 JavaScript 的除法会直接计算到小数，计算商要用 Math.floor() 方法

时间复杂度：O(logn)

空间复杂度：O(1)

```javascript
const search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (target === nums[mid])
      return mid
    if (target < nums[mid])
      right = mid - 1
    else left = mid + 1
  }
  return -1
}
```
P.S. ChatGPT 修改 bug 信手拈来，针对一些耗时耗力的低级错误特别有效。

![Screenshot 2023-02-16 at 10.18.29 am](https://p.ipic.vip/6nx0rl.png)

## 27. Remove Element

**双指针法**：通过一个快指针和慢指针在一个 for 循环下完成两个 for 循环的工作

题目要求原地修改元素，因而只循环一次

快指针：寻找新数组的元素

慢指针：指向新数组的下标

时间复杂度：O(n)

空间复杂度：O(1)

```javascript
const removeElement = function (nums, val) {
  let slow = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val)
      nums[slow++] = nums[fast]
  }
  return slow
}
```

P.S. JavaScript Increment operator **postfix** vs. **prefix**

后缀式  `x++` 返回加一之前的值

前缀式  `++x` 返回加一之后的值