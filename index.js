function getUsefulStackTrace(stack, separator = 'at newFn') {
  const [,, ...lines] = stack.split('\n');
  let l = 0;

  for (l; l < lines.length; l += 1) {
    if (lines[l].includes(separator)) {
      break;
    }
  }
  return lines.slice(0, l);
}

module.exports = getUsefulStackTrace;
