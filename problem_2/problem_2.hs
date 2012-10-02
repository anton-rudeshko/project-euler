fibs = 0:1:zipWith (+) fibs (tail fibs)

limit :: Ord a => [a] -> a -> [a]
limit [] _ = []
limit (x:xs) lim = if (x > lim) then [] else [x] ++ limit xs lim

problem2 = sum [x | x <- limit fibs 4000000, even x]