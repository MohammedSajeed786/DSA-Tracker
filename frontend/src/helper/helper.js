export let categories = [
  "Arrays",
  "Linked List",
  "Strings",
  
  "Stacks and Queues",
  "Binary Search",
  "Greedy",
  "Recursion",
  "Binary Trees",
  "Binary Search Trees",
  "Graphs",
  "Dynamic Programming",
  "Tries",
];

export let all_questions = new Map();
// categories.forEach(generate_questions);
// function generate_questions(val, ind) {
//   all_questions[val] = [
//     {
//       q_no: 1,
//       link: "gfg",
//       name: "rotate",
//       difficulty: "easy",
//       notes: "",
//     },
//     {
//       q_no: 2,
//       link: "lc",
//       name: "reverse",
//       difficulty: "medium",
//       notes: "",
//     },
//     {
//       q_no: 3,
//       link: "abc",
//       name: "xyz",
//       difficulty: "hard",
//       notes: "",
//     },
//   ];
// }

all_questions["Arrays"] = [
  {
    name: "Majority Element (>N/2 times)",
    link: "https://leetcode.com/problems/majority-element/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=AoX3BPWNnoE&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=16",
  },
  {
    name: "Merge two sorted Arrays without extra space	",
    link: "https://leetcode.com/problems/merge-sorted-array/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=hVl2b3bLzBw&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=4",
  },
  {
    name: "Best Time to Buy and Sell Stock",
    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=eMSfBgbiEjk&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=12",
  },
  {
    name: "Maximum Subarray",
    link: "https://leetcode.com/problems/maximum-subarray/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=w_KEocd__20&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=5",
  },
  {
    name: "Pascal's Triangle",
    link: "https://leetcode.com/problems/pascals-triangle/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=6FLvhQjZqvM&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=8",
  },
  {
    name: "Set Matrix Zeroes",
    link: "https://leetcode.com/problems/set-matrix-zeroes/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=M65xBewcqcI&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=8",
  },
  {
    name: "Next Permutation",
    link: "https://leetcode.com/problems/next-permutation/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=LuLCLgMElus&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=10",
  },
  {
    name: "Sort Colors",
    link: "https://leetcode.com/problems/sort-colors/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=oaVa-9wmpns&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=3",
  },
  {
    name: "Rotate Image",
    link: "https://leetcode.com/problems/rotate-image/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=Y72QeX0Efxw&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=13",
  },
  {
    name: "Merge Overlapping Subintervals",
    link: "https://leetcode.com/problems/merge-intervals/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=2JzRBPFYbKE&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=6",
  },
  {
    name: "Find the duplicate in an array of N+1 integers.",
    link: "https://leetcode.com/problems/find-the-duplicate-number/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=32Ll35mhWg0&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=1",
  },
  {
    name: "Repeat and Missing Number",
    link: "https://www.interviewbit.com/problems/repeat-and-missing-number-array/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=5nMGY4VUoRY&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=3",
  },
  {
    name: "Inversion of Array (Pre-req: Merge Sort)",
    link: "https://www.codingninjas.com/codestudio/problems/count-inversions_615",
    difficulty: "medium",
    resource: "https://www.youtube.com/watch?v=kQ1mJlwW-c0",
  },
  {
    name: "Search in a 2d Matrix",
    link: "https://leetcode.com/problems/search-a-2d-matrix/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=ZYpYur0znng&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=14",
  },
  {
    name: "Pow(X,n)",
    link: "https://leetcode.com/problems/powx-n/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=l0YC3876qxg&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=15",
  },
  {
    name: "Majority Element (>N/3 times)",
    link: "https://leetcode.com/problems/majority-element-ii/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=yDbkQd9t2ig&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=17",
  },
  {
    name: "Grid Unique Paths	",
    link: "https://leetcode.com/problems/unique-paths/",
    difficulty: "medium",
    resource: "https://youtu.be/t_f0nwwdg5o",
  },
  {
    name: "Reverse Pairs",
    link: "https://leetcode.com/problems/reverse-pairs/",
    difficulty: "hard",
    resource:
      "https://www.youtube.com/watch?v=S6rsAlj_iB4&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=19",
  },
  {
    name: "2-Sum-Problem",
    link: "https://leetcode.com/problems/two-sum/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=dRUpbt8vHpo&list=PLgUwDviBIf0rVwua0kKYlsS_ik_1lyVK_&index=2",
  },
  {
    name: "4-sum-Problem",
    link: "https://leetcode.com/problems/4sum/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=4ggF3tXIAp0&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=21",
  },
  {
    name: "Longest Consecutive Sequence",
    link: "https://leetcode.com/problems/longest-consecutive-sequence/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=qgizvmgeyUM&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=22",
  },
  {
    name: "Largest Subarray with 0 sum",
    link: "https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=xmguZ6GbatA&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=23",
  },
  {
    name: "Count number of subarrays with given Xor K",
    link: "https://www.interviewbit.com/problems/subarray-with-given-xor/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=lO9R5CaGRPY&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=25",
  },
  {
    name: "Longest Substring without repeat",
    link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=qtVh-XEpsJo&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=26",
  },
  {
    name: "3 sum",
    link: "https://leetcode.com/problems/3sum/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=onLoX6Nhvmg&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=41",
  },
  {
    name: "Trapping rainwater",
    link: "https://leetcode.com/problems/trapping-rain-water/",
    difficulty: "hard",
    resource:
      "https://www.youtube.com/watch?v=m18Hntz4go8&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=42",
  },
  {
    name: "Remove Duplicate from Sorted array",
    link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=Fm_p9lJ4Z_8&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=43",
  },
  {
    name: "Max consecutive ones",
    link: "https://leetcode.com/problems/max-consecutive-ones/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=Mo33MjjMlyA&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=44",
  },
];

all_questions["Linked List"] = [
  {
    name: "Reverse a LinkedList",
    link: "https://leetcode.com/problems/reverse-linked-list/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=iRtLEoL-r-g&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=27",
  },
  {
    name: "Find the middle of LinkedList",
    link: "https://leetcode.com/problems/middle-of-the-linked-list/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=sGdwSH8RK-o&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=28",
  },
  {
    name: "Merge two sorted Linked List",
    link: "https://leetcode.com/problems/merge-two-sorted-lists/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=Xb4slcp1U38&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=29",
  },
  {
    name: "Remove N-th node from back of LinkedList",
    link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=Lhu3MsXZy-Q&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=30",
  },
  {
    name: "Add two numbers as LinkedList	",
    link: "https://leetcode.com/problems/add-two-numbers/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=LBVsXSMOIk4&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=32",
  },
  {
    name: "Delete a given Node when a node is given.",
    link: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=icnp4FJdZ_c&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=31",
  },
  {
    name: "Find intersection point of Y LinkedList	",
    link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=u4FWXfgS8jw&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=33",
  },
  {
    name: "Detect a cycle in Linked List	",
    link: "https://leetcode.com/problems/linked-list-cycle/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=354J83hX7RI&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=34",
  },
  {
    name: "Reverse a LinkedList in groups of size k",
    link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    difficulty: "hard",
    resource:
      "https://www.youtube.com/watch?v=-DtNInqFUXs&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=36",
  },
  {
    name: "Check if a LinkedList is palindrome or not",
    link: "https://leetcode.com/problems/palindrome-linked-list/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=-DtNInqFUXs&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=36",
  },
  {
    name: "Find the starting point of the Loop of LinkedList",
    link: "https://leetcode.com/problems/linked-list-cycle-ii/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=QfbOhn0WZ88&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=37",
  },
  {
    name: "Flattening of a LinkedList",
    link: "https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=ysytSSXpAI0&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=38",
  },
  {
    name: "Rotate a LinkedList	",
    link: "https://leetcode.com/problems/rotate-list/description/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=9VPm6nEbVPA&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=39",
  },
  {
    name: "Clone a Linked List with random and next pointer",
    link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
    difficulty: "medium",
    resource: "https://www.youtube.com/watch?v=VNf6VynfpdM",
  },
];

all_questions["Greedy"] = [
  {
    name: "N meetings in one room",
    link: "https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=II6ziNnub1Q&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=45",
  },
  {
    name: "Minimum number of platforms required for a railway",
    link: "https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1#",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=dxVcMDI7vyI&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=46",
  },
  {
    name: "Job sequencing Problem",
    link: "https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1#",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=LjPx4wQaRIs&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=47",
  },
  {
    name: "Fractional Knapsack Problem",
    link: "https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=F_DDzYnxO14&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=49",
  },
  {
    name: "find minimum number of coins",
    link: "https://bit.ly/3nquVHj",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=mVg9CfJvayM&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=48",
  },
  {
    name: "Activity Selection",
    link: "https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=II6ziNnub1Q&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=45",
  },
];

all_questions["Recursion"] = [
  {
    name: "Subset Sums",
    link: "https://practice.geeksforgeeks.org/problems/subset-sums2234/1",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=rYkfBRtMJr8&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=52",
  },
  {
    name: "Subset-II",
    link: "https://leetcode.com/problems/subsets-ii/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=RIn3gOkbhQE&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=53",
  },
  {
    name: "Combination sum-1",
    link: "https://leetcode.com/problems/combination-sum/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=OyZFFqQtu98&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=49",
  },
  {
    name: "Combination sum-2",
    link: "https://leetcode.com/problems/combination-sum-ii/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=G1fRTGRxXU8&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=50",
  },
  {
    name: "Palindrome Partitioning",
    link: "https://leetcode.com/problems/palindrome-partitioning/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=WBgsABoClE0&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=51",
  },
  {
    name: "K-th permutation Sequence",
    link: "https://leetcode.com/problems/permutation-sequence/",
    difficulty: "hard",
    resource:
      "https://www.youtube.com/watch?v=wT7gcXLYoao&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=55",
  },
  {
    name: "Print all permutations of a string/array	",
    link: "https://leetcode.com/problems/permutations/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=f2ic2Rsc9pU&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=52",
  },
  {
    name: "N queens Problem",
    link: "https://leetcode.com/problems/n-queens/",
    difficulty: "hard",
    resource:
      "https://www.youtube.com/watch?v=i05Ju7AftcM&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=57",
  },
  {
    name: "Sudoku Solver",
    link: "https://leetcode.com/problems/sudoku-solver/",
    difficulty: "hard",
    resource:
      "https://www.youtube.com/watch?v=FWAIf_EVUKE&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=58",
  },
  {
    name: "M coloring Problem	",
    link: "https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1#",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=wuVwUK25Rfc&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=59",
  },
  {
    name: "Rat in a Maze	",
    link: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=bLGZhJlt4y0&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=60",
  },
  {
    name: "Word Break",
    link: "https://bit.ly/3FxgW92",
    difficulty: "hard",
    resource: "",
  },
];

all_questions["Binary Search"] = [
  {
    name: "The N-th root of an integer	",
    link: "https://bit.ly/3rj7Ib1",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=WjpswYrS2nY&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=63",
  },
  {
    name: "Matrix Median	",
    link: "https://www.interviewbit.com/problems/matrix-median/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=63fPPOdIr2c&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=62",
  },
  {
    name: "Find the element that appears once in a sorted array",
    link: "https://leetcode.com/problems/single-element-in-a-sorted-array/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=PzszoiY5XMQ&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=65",
  },
  {
    name: "Search element in a sorted and rotated array",
    link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=r3pMQ8-Ad5s&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=64",
  },
  {
    name: "Median of 2 sorted arrays	",
    link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    difficulty: "hard",
    resource:
      "https://www.youtube.com/watch?v=NTop3VTjmxk&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=65",
  },
  {
    name: "K-th element of two sorted arrays	",
    link: "https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=nv7F4PiLUzo&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=66",
  },
  {
    name: "Allocate Minimum Number of Pages	",
    link: "https://www.interviewbit.com/problems/allocate-books/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=gYmWHvRHu-s&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=69",
  },
  {
    name: "Aggressive Cows",
    link: "https://www.spoj.com/problems/AGGRCOW/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=wSOfYesTBRk&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=70",
  },
];

all_questions["Tries"] = [
  {
    name: "Implement Trie (Prefix Tree)	",
    link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=dBGUmUQhjaM&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp",
  },
  {
    name: "Implement Trie – 2 (Prefix Tree)	",
    link: "https://bit.ly/3qwT4OL",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=K5pcpkEMCN0&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&index=2",
  },
  {
    name: "Longest String with All Prefixes	",
    link: "https://bit.ly/3n3kedU",
    difficulty: "hard",
    resource:
      "https://www.youtube.com/watch?v=AWnBa91lThI&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&index=3",
  },
  {
    name: "Number of Distinct Substrings in a String",
    link: "https://bit.ly/3ocRQW0",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=RV0QeTyHZxo&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&index=4",
  },
  {
    name: "Power Set",
    link: "https://practice.geeksforgeeks.org/problems/power-set4302/1#",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=b7AYbpM5YrE&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=67",
  },
  {
    name: "Maximum XOR of two numbers in an array	",
    link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=EIhAwfHubE8&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&index=6",
  },
  {
    name: "Maximum XOR With an Element From Array	",
    link: "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/",
    difficulty: "hard",
    resource:
      "https://www.youtube.com/watch?v=Q8LhG9Pi5KM&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&index=7",
  },
];

all_questions["Stacks and Queues"] = [
  {
    name: "Implement Stack Using Arrays	",
    link: "https://practice.geeksforgeeks.org/problems/implement-stack-using-array/1",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=GYptUgnIM_I&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=68",
  },
  {
    name: "Implement Queue using Stack",
    link: "https://leetcode.com/problems/implement-queue-using-stacks/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=3Et9MrMc02A&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=75",
  },
  {
    name: "Check for balanced parentheses	",
    link: "https://leetcode.com/problems/valid-parentheses/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=wkDfsKijrZ8&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=74",
  },
  {
    name: "Next Greater Element	",
    link: "https://leetcode.com/problems/next-greater-element-i/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=Du881K7Jtk8&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=75",
  },
  {
    name: "Sort a Stack	",
    link: "https://bit.ly/3nptF7k",
    difficulty: "easy",
    resource: "",
  },
  {
    name: "Next Smaller Element	",
    link: "https://www.interviewbit.com/problems/nearest-smaller-element/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=Du881K7Jtk8&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=75",
  },
  {
    name: "LRU cache",
    link: "https://leetcode.com/problems/lru-cache/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=xDEuM5qa0zg&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=77",
  },
  {
    name: "Implement Queue Using Arrays	",
    link: "https://bit.ly/3KbIjIW",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=M6GnoUDpqEE&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=72",
  },
  {
    name: "Implement Stack using Queue",
    link: "https://leetcode.com/problems/implement-stack-using-queues/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=jDZQKzEtbYQ&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=74",
  },
  {
    name: "LFU Cache	",
    link: "https://leetcode.com/problems/lfu-cache/",
    difficulty: "hard",
    resource:
      "https://www.youtube.com/watch?v=0PSB9y8ehbk&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=79",
  },
  {
    name: "Largest rectangle in a histogram	",
    link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    difficulty: "hard",
    resource:
      "https://www.youtube.com/watch?v=jC_cWLy7jSI&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=82",
  },
  {
    name: "Sliding Window maximum	",
    link: "https://leetcode.com/problems/sliding-window-maximum/",
    difficulty: "hard",
    resource:
      "https://www.youtube.com/watch?v=CZQGRp93K4k&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=83",
  },
  {
    name: "Implement Min Stack",
    link: "https://leetcode.com/problems/min-stack/",
    difficulty: "easy",
    resource: "https://youtu.be/V09NfaGf2ao",
  },
  {
    name: "Rotten Orange",
    link: "https://leetcode.com/problems/rotting-oranges/",
    difficulty: "medium",
    resource: "https://youtu.be/pUAPcVlHLKA",
  },
  {
    name: "Stock Span Problem	",
    link: "https://leetcode.com/problems/online-stock-span/",
    difficulty: "medium",
    resource: "",
  },
  {
    name: "Find the maximum of minimums of every window size	",
    link: " https://bit.ly/3zUYLZz",
    difficulty: "hard",
    resource: "",
  },
  {
    name: "The Celebrity Problem	",
    link: "https://bit.ly/3GuImxi",
    difficulty: "medium",
    resource: "",
  },
];

all_questions["Strings"] = [
  {
    name: "Reverse Words in a String	",
    link: "https://leetcode.com/problems/reverse-words-in-a-string/",
    difficulty: "medium",
    resource: "",
  },
  {
    name: "Longest Palindrome in a string	",
    link: "https://leetcode.com/problems/longest-palindromic-substring/",
    difficulty: "medium",
    resource: "",
  },
  {
    name: "Roman Number to Integer and vice versa	",
    link: "https://leetcode.com/problems/roman-to-integer/",
    difficulty: "easy",
    resource: "",
  },

  {
    name: "Implement ATOI/STRSTR	",
    link: "https://leetcode.com/problems/string-to-integer-atoi/",
    difficulty: "medium",
    resource: "",
  },
  {
    name: "Longest Common Prefix	",
    link: "https://leetcode.com/problems/longest-common-prefix/",
    difficulty: "easy",
    resource: "",
  },
  {
    name: "Rabin Karp	",
    link: "https://leetcode.com/problems/repeated-string-match/discuss/416144/Rabin-Karp-algorithm-C%2B%2B-implementation",
    difficulty: "medium",
    resource: "",
  },
  {
    name: "Z-Function	",
    link: "https://leetcode.com/problems/implement-strstr/",
    difficulty: "easy",
    resource: "",
  },
  {
    name: "KMP algo / LPS(pi) array	",
    link: "https://leetcode.com/problems/implement-strstr/",
    difficulty: "easy",
    resource: "",
  },
  {
    name: "Minimum characters needed to be inserted in the beginning to make it palindromic",
    link: "https://www.interviewbit.com/problems/minimum-characters-required-to-make-a-string-palindromic/",
    difficulty: "medium",
    resource: "",
  },
  {
    name: "Check for Anagrams	",
    link: "https://leetcode.com/problems/valid-anagram/",
    difficulty: "easy",
    resource: "",
  },
  {
    name: "Count and Say	",
    link: "https://leetcode.com/problems/count-and-say/",
    difficulty: "medium",
    resource: "",
  },
  {
    name: "Compare version numbers	",
    link: "vhttps://leetcode.com/problems/compare-version-numbers/",
    difficulty: "medium",
    resource: "",
  },
];

all_questions["Binary Trees"] = [
  {
    name: "Inorder Traversal	",
    link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=Z_NEgBgbRVI&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=7",
  },
  {
    name: "Preorder Traversal	",
    link: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
    difficulty: "easy",
    resource: "https://youtu.be/RlUu72JrOCQ",
  },
  {
    name: "Postorder Traversal	",
    link: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    difficulty: "easy",
    resource: "https://youtu.be/COQOU6klsBg",
  },
  {
    name: "Morris Inorder Traversal	",
    link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=80Zug6D1_r4&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=38",
  },
  {
    name: "LeftView Of Binary Tree	",
    link: "https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=KV4mRzTjlAk&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=25",
  },
  {
    name: "Bottom View of Binary Tree	",
    link: "https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=0FtVY6I4pB8&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=24",
  },
  {
    name: "Top View of Binary Tree	",
    link: "https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=Et9OCDNvJ78&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=23",
  },
  {
    name: "Preorder inorder postorder in a single traversal	",
    link: "https://bit.ly/3rlXpTX",
    difficulty: "easy",
    resource: "https://youtu.be/ySp2epYvgTE",
  },
  {
    name: "Vertical order traversal	",
    link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
    difficulty: "hard",
    resource: "https://youtu.be/q_a6lpbKJdw",
  },
  {
    name: "Root to node path in a Binary Tree	",
    link: "https://www.interviewbit.com/problems/path-to-given-node/",
    difficulty: "easy",
    resource: "https://youtu.be/fmflMqVOC7k",
  },
  {
    name: "Max width of a Binary Tree	",
    link: "https://leetcode.com/problems/maximum-width-of-binary-tree/",
    difficulty: "medium",
    resource: "https://youtu.be/ZbybYvcVLks",
  },
  {
    name: "Level order Traversal ",
    link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    difficulty: "medium",
    resource: "https://youtu.be/EoAsWbO7sqg",
  },
  {
    name: "Height of a Binary Tree	",
    link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    difficulty: "easy",
    resource: "https://youtu.be/eD3tmO66aBA",
  },
  {
    name: "Diameter of Binary Tree	",
    link: "https://leetcode.com/problems/diameter-of-binary-tree/",
    difficulty: "easy",
    resource: "https://youtu.be/Rezetez59Nk",
  },
  {
    name: "Check if the Binary tree is height-balanced or not	",
    link: "https://leetcode.com/problems/balanced-binary-tree/",
    difficulty: "easy",
    resource: "https://youtu.be/Yt50Jfbd8Po",
  },
  {
    name: "LCA in Binary Tree	",
    link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    difficulty: "medium",
    resource: "https://youtu.be/_-QHfMDde90",
  },
  {
    name: "Check if two trees are identical or not	",
    link: "https://leetcode.com/problems/same-tree/",
    difficulty: "easy",
    resource: "https://youtu.be/BhuvF_-PWS0",
  },
  {
    name: "Zig Zag Traversal of Binary Tree	",
    link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
    difficulty: "medium",
    resource: "https://youtu.be/3OXWEdlIGl4",
  },
  {
    name: "Boundary Traversal of Binary Tree	",
    link: " https://bit.ly/3GxQ6yH",
    difficulty: "hard",
    resource: "https://youtu.be/0ca1nvR0be4",
  },
  {
    name: "Maximum path sum	",
    link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    difficulty: "hard",
    resource: "https://youtu.be/WszrfSwMz58",
  },
  {
    name: "Construct Binary Tree from inorder and preorder	",
    link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    difficulty: "medium",
    resource: "https://youtu.be/aZNaLrVebKQ",
  },
  {
    name: "Construct Binary Tree from Inorder and Postorder	",
    link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
    difficulty: "medium",
    resource: "https://youtu.be/LgLRTaEMRVc",
  },

  {
    name: "Symmetric Binary Tree	",
    link: "https://leetcode.com/problems/symmetric-tree/",
    difficulty: "easy",
    resource: "https://youtu.be/nKggNAiEpBE",
  },

  {
    name: "Flatten Binary Tree to LinkedList	",
    link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
    difficulty: "medium",
    resource: "https://youtu.be/sWf7k1x9XR4",
  },

  {
    name: "Check if Binary Tree is the mirror of itself or not	",
    link: "https://practice.geeksforgeeks.org/problems/mirror-tree/1",
    difficulty: "easy",
    resource: "",
  },

  {
    name: "Check for Children Sum Property	",
    link: "https://bit.ly/33yExIQ",
    difficulty: "medium",
    resource: "https://youtu.be/fnmisPM6cVo",
  },

  {
    name: "Binary Tree to Double Linked List	",
    link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=sWf7k1x9XR4&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=39",
  },

  {
    name: "Find median in a stream of running integers.	",
    link: "https://leetcode.com/problems/find-median-from-data-stream/",
    difficulty: "",
    resource: "hard",
  },
  {
    name: "K-th largest element in a stream.	",
    link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    difficulty: "easy",
    resource: "",
  },
  {
    name: "Distinct numbers in Window.	",
    link: "https://www.interviewbit.com/problems/distinct-numbers-in-window/",
    difficulty: "medium",
    resource: "",
  },
  {
    name: "K-th largest element in an unsorted array.	",
    link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    difficulty: "medium",
    resource: "",
  },
  {
    name: "Flood-fill Algorithm	",
    link: "https://leetcode.com/problems/flood-fill/",
    difficulty: "easy",
    resource: "",
  },
];



all_questions["Binary Search Trees"] = [
  {
    name: "Populate Next Right pointers of Tree	",
    link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
    difficulty: "medium",
    resource: "",
  },
  {
    name: "Search given Key in BST	",
    link: "https://leetcode.com/problems/search-in-a-binary-search-tree/",
    difficulty: "easy",
    resource: "https://youtu.be/KcNt6v_56cc",
  },
  {
    name: "Construct BST from given keys	",
    link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
    difficulty: "easy",
    resource: "",
  },
  {
    name: "Construct BST from preorder traversal	",
    link: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
    difficulty: "medium",
    resource: "https://youtu.be/UmJT3j26t1I",
  },
  {
    name: "Check is a BT is BST or not	",
    link: "https://leetcode.com/problems/validate-binary-search-tree/",
    difficulty: "medium",
    resource: "https://youtu.be/f-sj7I5oXEI",
  },
  {
    name: "Find LCA of two nodes in BST	",
    link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    difficulty: "easy",
    resource: "https://youtu.be/cX_kPV_foZc",
  },
  {
    name: "Find the inorder predecessor/successor of a given Key in BST.	",
    link: "https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1",
    difficulty: "easy",
    resource: "https://youtu.be/SXKAD2svfmI",
  },
  {
    name: "Floor in a BST	",
    link: "https://www.codingninjas.com/codestudio/problems/floor-from-bst_920457?source=youtube&campaign=Striver_Tree_Videos&utm_source=youtube&utm_medium=affiliate&utm_campaign=Striver_Tree_Videos",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=xm_W1ub-K-w&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=43",
  },
  {
    name: "Ceil in a BST	",
    link: "https://www.codingninjas.com/codestudio/problems/ceil-from-bst_920464?source=youtube&campaign=Striver_Tree_Videos&utm_source=youtube&utm_medium=affiliate&utm_campaign=Striver_Tree_Videos",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=KSsk8AhdOZA&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=42",
  },
  {
    name: "Find K-th smallest element in BST	",
    link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    difficulty: "medium",
    resource: "https://youtu.be/9TJYWh0adfk",
  },

  {
    name: "Find K-th largest element in BST	",
    link: "https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1",
    difficulty: "medium",
    resource: "https://youtu.be/9TJYWh0adfk",
  },
  {
    name: "Find a pair with a given sum in BST	",
    link: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",
    difficulty: "easy",
    resource: "https://youtu.be/ssL3sHwPeb4",
  },
  {
    name: "BST iterator	",
    link: "https://leetcode.com/problems/binary-search-tree-iterator/",
    difficulty: "medium",
    resource: "https://youtu.be/D2jMcmxU4bs",
  },
  {
    name: "Size of the largest BST in a Binary Tree	",
    link: "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/",
    difficulty: "hard",
    resource: "https://youtu.be/X0oXMdtUDwo",
  },
  {
    name: "Serialize and deserialize Binary Tree	",
    link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    difficulty: "hard",
    resource:
      "https://www.youtube.com/watch?v=-YbXySKJsX8&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=37",
  },
];

all_questions["Graphs"] = [
  {
    name: "Clone a graph",
    link: "https://leetcode.com/problems/clone-graph/",
    difficulty: "medium",
    resource: "",
  },
  {
    name: "DFS	",
    link: "https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=uDWljP2PGmU&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=7",
  },
  {
    name: "BFS	",
    link: "https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
    difficulty: "easy",
    resource:
      "https://www.youtube.com/watch?v=UeE67iCK2lQ&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=6",
  },
  {
    name: "Detect A cycle in Undirected Graph using BFS	",
    link: "https://leetcode.com/problems/course-schedule/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=A8ko93TyOns&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=8",
  },
  {
    name: "Detect A cycle in Undirected Graph using DFS	",
    link: "https://leetcode.com/problems/course-schedule/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=Y9NFqI6Pzd4&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=9",
  },
  {
    name: "Detect A cycle in a Directed Graph using DFS	",
    link: "https://leetcode.com/problems/course-schedule/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=uzVUw90ZFIg&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=12",
  },
  {
    name: "Detect A cycle in a Directed Graph using BFS	",
    link: "https://leetcode.com/problems/course-schedule/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=V6GxfKDyLBM&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=15",
  },
  {
    name: "Topological Sort BFS	",
    link: "https://practice.geeksforgeeks.org/problems/topological-sort/1",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=rZv_jHZva34&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=14",
  },
  {
    name: "Topological Sort DFS	",
    link: "https://practice.geeksforgeeks.org/problems/topological-sort/1",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=Yh6EFazXipA&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=13",
  },
  {
    name: "Number of islands",
    link: "https://leetcode.com/problems/number-of-islands/",
    difficulty: "medium",
    resource: "",
  },
  {
    name: "Bipartite Check using BFS	",
    link: "https://leetcode.com/problems/is-graph-bipartite/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=nbgaEu-pvkU&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=10",
  },
  {
    name: "Bipartite Check using DFS	",
    link: "https://leetcode.com/problems/is-graph-bipartite/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=uC884ske2uQ&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=11",
  },
  {
    name: "Strongly Connected Component",
    link: "https://bit.ly/3twUKJPP=",
    difficulty: "hard",
    resource:
      "https://www.youtube.com/watch?v=V8qIqJxCioo&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=27",
  },
  {
    name: "Dijkstra’s Algorithm	",
    link: "https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=jbhuqIASjoM&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=18",
  },
  {
    name: "Bellman-Ford Algo	",
    link: "https://practice.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/0/?fbclid=IwAR2_lL0T84DnciLyzMTQuVTMBOi82nTWNLuXjUgahnrtBgkphKiYk6xcyJU",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=75yC1vbS8S8&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=28",
  },
  {
    name: "Floyd Warshall Algorithm	",
    link: "https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1",
    difficulty: "medium",
    resource: "",
  },
  {
    name: "MST using Prim’s Algo	",
    link: "https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=HnD676J56ak&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=20",
  },
  {
    name: "MST using Kruskal’s Algo	",
    link: "https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=1KRmCzBl_mQ&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=24",
  },
];
all_questions["Dynamic Programming"] = [
  {
    name: "Max Product Subarray	",
    link: "https://leetcode.com/problems/maximum-product-subarray/",
    difficulty: "medium",
    resource: "",
  },
  {
    name: "Longest Increasing Subsequence	",
    link: "https://leetcode.com/problems/longest-increasing-subsequence/",
    difficulty: "medium",
    resource:
      "https://www.youtube.com/watch?v=ekcwMsSIzVc&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY&index=42",
  },
  {
    name: "Longest Common Subsequence	",
    link: "https://leetcode.com/problems/longest-common-subsequence/",
    difficulty: "medium",
    resource: "https://www.youtube.com/watch?v=NPZn9jBrX8U&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY&index=26&t=1s",
  },
  {
    name: "0-1 Knapsack	",
    link: "https://leetcode.com/problems/ones-and-zeroes/",
    difficulty: "medium",
    resource: "https://www.youtube.com/watch?v=GqOmJHQZivw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY&index=20",
  },
  {
    name: "Edit Distance	",
    link: "https://leetcode.com/problems/edit-distance/",
    difficulty: "hard",
    resource: "https://www.youtube.com/watch?v=fJaKO8FbDdo&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY&index=34&t=10s",
  },
  {
    name: "Maximum sum increasing subsequence	",
    link: "https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1",
    difficulty: "medium",
    resource: "",
  },
  {
    name: "Matrix Chain Multiplication	",
    link: "https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1",
    difficulty: "hard",
    resource:
      "https://www.youtube.com/watch?v=vRVfmbCFW7Y&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY&index=49",
  },
  {
    name: "Maximum sum path in the matrix",
    link: "https://leetcode.com/problems/minimum-path-sum/",
    difficulty: "medium",
    resource: "https://www.youtube.com/watch?v=_rgTlyky1uQ&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY&index=11",
  },
  {
    name: "Coin change	",
    link: "https://leetcode.com/problems/coin-change/",
    difficulty: "medium",
    resource: "https://www.youtube.com/watch?v=myPeWb3Y68A&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY&index=21",
  },
  {
    name: "Subset Sum	",
    link: "https://leetcode.com/problems/partition-equal-subset-sum/",
    difficulty: "medium",
    resource: "https://www.youtube.com/watch?v=fWX9xDmIzRI&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY&index=15&t=1901s",

  },

  {
    name: "Rod Cutting	",
    link: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/",
    difficulty: "hard",
    resource: "https://www.youtube.com/watch?v=mO8XpGoJwuo&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY&index=25",
  },

  {
    name: "Egg Dropping	",
    link: "https://practice.geeksforgeeks.org/problems/egg-dropping-puzzle-1587115620/1",
    difficulty: "medium",
    resource: "",
  },

  {
    name: "Word Break	",
    link: "https://practice.geeksforgeeks.org/problems/word-break1352/1",
    difficulty: "medium",
    resource: "",
  },

  {
    name: "Palindrome Partitioning",
    link: "https://practice.geeksforgeeks.org/problems/palindromic-patitioning4845/1",
    difficulty: "hard",
    resource: "",
  },

  {
    name: "Maximum profit in Job scheduling	",
    link: "https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1",
    difficulty: "medium",
    resource: "",
  },
];
categories.forEach(sort_difficulty);
function sort_difficulty(value, index) {
  let q = all_questions[value];
  let new_q = q.sort(cmp);
  all_questions[value] = new_q;
}

function cmp(a, b) {
  if (a.difficulty == b.difficulty) return 0;
  else {
    if (
      (a.difficulty == "easy" && b.difficulty == "medium") ||
      (a.difficulty == "easy" && b.difficulty == "hard") ||
      (a.difficulty == "medium" && b.difficulty == "hard")
    )
      return -1;
    if (
      (b.difficulty == "easy" && a.difficulty == "medium") ||
      (b.difficulty == "easy" && a.difficulty == "hard") ||
      (b.difficulty == "easy" && a.difficulty == "hard")
    )
      return 1;
  }
}

let count = 0;
categories.forEach(generate_qno);
function generate_qno(val, ind) {
  let q = all_questions[val];
  q.forEach(add_qno);
  all_questions[val] = q;
}

function add_qno(val, ind) {
  val["q_no"] = count;
  count = count + 1;
}

export default { categories, all_questions };







