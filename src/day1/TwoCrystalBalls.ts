export default function two_crystal_balls(breaks: boolean[]): number {

  const jmpAmmount = Math.floor(Math.sqrt(breaks.length))
  let i = jmpAmmount;

  for (; i < breaks.length; i += jmpAmmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jmpAmmount; // jumping back
  /**
   * why don't we use j as the index? 
   * because j is just to count how many steps we need to walk
   * through the array. The real index is held in the i variable. 
   * 
   */
  for (let j = 0; j < jmpAmmount && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i
    }
  }
  return -1;

}
