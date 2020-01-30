/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0, j = 0;
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
};

/**
 * Approach 1: Brute Force
 */

 /**
  Complexity Analysis

    Time complexity : O(n^2). 
    For each element, we try to find its complement by looping through 
    the rest of array which takes O(n) time. Therefore, the time 
    complexity is O(n^2).

    Space complexity : O(1).
    
  */