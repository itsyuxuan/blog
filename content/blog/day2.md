---
external: false
title: Day 2 第一章数组 
description: 977. Squares of a Sorted Array; 209. Minimum Size Subarray Sum
date: 2023-02-16
---

## LC.977 Squares of a Sorted Array

**双指针法**：数组的平方两端大，中间小，可用双指针从两端分别向中间靠拢，每次比较两个指针对应的数，选择绝对值较大的那个数的平方逆序放入结果数组，并移动该指针

Sort the squared values in O(n) time complexity by using two pointers, one at the start of the array and one at the end of the array. Compare the absolute values of the elements pointed to by the two pointers, and insert the larger of the two squared values into the result array starting from the end.

给定数组的性质决定了结果数组应当逆序生成

时间复杂度：O(n)

空间复杂度：O(1)

```javascript
const sortedSquares = function (nums) {
  let i = 0
  let j = nums.length - 1
  const res = []
  while (i <= j) {
    if (Math.abs(nums[i]) <= Math.abs(nums[j])) {
      res.unshift(nums[j] * nums[j])
      j--
    }
    else {
      res.unshift(nums[i] * nums[i])
      i++
    }
  }
  return res
}
```

## LC.209 Minimum Size Subarray Sum

**滑动窗口法**：题目说了 nums 数组中的元素都是正数，有了这个前提才能使用滑动窗口算法，因为窗口扩大时窗口内元素之和必然增大，窗口缩小时窗口内元素之和必然减小

时间复杂度主要看每一个元素被操作的次数

每个元素最多被操作两次，一次是加入窗口，一次是移出窗口

所以时间复杂度是 2 × n 也就是 O(n)

时间复杂度：O(n)

空间复杂度：O(1)

```javascript
const minSubArrayLen = function (target, nums) {
  let l = 0
  let r = 0
  // 维护窗口内元素之和
  let sum = 0
  let res = c
  while (r < nums.length) {
    // 扩大窗口
    sum += nums[r++]
    while (sum >= target) {
      // 已经达到 target，缩小窗口，同时更新答案
      res = Math.min(res, r - l)
      sum -= nums[l++]
    }
  }
  return res === Number.MAX_SAFE_INTEGER ? 0 : res
}
```

P.S. **subarray** vs. **subsequence**

子数组连续，子序列可不连续但保持相对顺序

A subarray is a **contiguous** part of array and maintains relative ordering of elements. For an array/string of size n, there are n*(n+1)/2 non-empty subarrays/substrings. A subsequence maintain **relative ordering** of elements but may or may not be a contiguous part of an array.
