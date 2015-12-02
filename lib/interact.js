var readline = require('readline');

exports.ask = function(originalQuestion, yesOrNo) {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function askLoop(question, opt) {
    rl.question(question, (answer) => {
      answer = answer.toLowerCase();
      switch(answer) {
        case 'yes':
        case 'y':
          opt.yes.call(null, originalQuestion, answer);
          rl.close();
          break;
        case 'no':
        case 'n':
          opt.no.call(null, originalQuestion, answer);
          rl.close();
          break;
        default:
          askLoop('Yes(y) or No(n) ? ', opt);
      }
    });
  };

  askLoop(originalQuestion + '(yes/no)', yesOrNo);
};
