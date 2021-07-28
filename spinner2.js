const spin = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

spin.forEach((anim, index) => {
  setTimeout(() => {
    process.stdout.write(anim);
    if (index < spin.length - 1) {
      process.stdout.write("\r");
    } else {
      process.stdout.write("\n");
    }
  }, 200 + index * 100);
});
