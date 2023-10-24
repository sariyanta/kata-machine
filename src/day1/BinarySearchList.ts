export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0; 
  let hi = haystack.length

  do {
    let mid = Math.floor(lo + (hi - lo) / 2);
    let val = haystack[mid]
    if (val === needle) {
      return true
    } else if (val < needle) {
      lo = mid + 1
    } else {
      hi = mid
    }
  } while(lo < hi); 
  return false;
}
