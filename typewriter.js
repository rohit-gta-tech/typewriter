const sentence = "hello there from lighthouse labs";
for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
        process.stdout.write(sentence[i]);
    }, i*1000)
}
process.stdout.write('\n');