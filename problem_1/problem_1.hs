problem1 = sum [x | x <- [1..999], x `dividesBy` 3 || x `dividesBy` 5]
    where dividesBy x y = x `mod` y == 0