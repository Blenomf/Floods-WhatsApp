async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

Uma vez Flamengo
Sempre Flamengo
Flamengo sempre eu hei de ser

É meu maior prazer vê-lo brilhar
Seja na terra, seja no mar
Vencer, vencer, vencer

Uma vez Flamengo
Flamengo até morrer

Na regata, ele me mata
Me maltrata, me arrebata
Que emoção no coração
Consagrado no gramado
Sempre amado, o mais cotado
No Fla-Flu é o: Ai, Jesus!

Eu teria um desgosto profundo
Se faltasse o Flamengo no mundo
Ele vibra, ele é fibra
Muita libra já pesou
Flamengo até morrer eu sou

Uma vez Flamengo
Sempre Flamengo
Flamengo sempre eu hei de ser

É meu maior prazer vê-lo brilhar
Seja na terra, seja no mar
Vencer, vencer, vencer

Uma vez Flamengo
Flamengo até morrer

Na regata, ele me mata
Me maltrata, me arrebata
Que emoção no coração
Consagrado no gramado
Sempre amado, o mais cotado
No Fla-Flu é o: Ai, Jesus!

Eu teria um desgosto profundo
Se faltasse o Flamengo no mundo
Ele vibra, ele é fibra
Muita libra já pesou
Flamengo até morrer eu sou
...
...
...
VAMOS DE NOVO? SO QUE MAIS LENTAMENTE!!!
...
...
...
Uma 
vez 
Flamengo
Sempre 
Flamengo
Flamengo 
sempre 
eu 
hei 
de 
ser

É 
meu 
maior 
prazer 
vê-lo 
brilhar
Seja
na 
terra, 
seja 
no 
mar
Vencer, 
vencer, 
vencer

Uma 
vez 
Flamengo
Flamengo 
até 
morrer

Na 
regata, 
ele 
me 
mata
Me 
maltrata, 
me 
arrebata
Que 
emoção 
no 
coração
Consagrado 
no 
gramado
Sempre 
amado, 
o mais 
cotado
No 
Fla-Flu 
é 
o: 
Ai, 
Jesus!

Eu 
teria 
um 
desgosto 
profundo
Se 
faltasse 
o 
Flamengo 
no 
mundo
Ele 
vibra, 
ele 
é 
fibra
Muita 
libra 
já pesou
Flamengo 
até 
morrer 
eu sou

Uma 
vez 
Flamengo
Sempre 
Flamengo
Flamengo 
sempre 
eu 
hei 
de 
ser

É 
meu 
maior 
prazer 
vê-lo 
brilhar
Seja 
na 
terra, 
seja 
no 
mar
Vencer, 
vencer, 
vencer

Uma 
vez 
Flamengo
Flamengo 
até 
morrer

Na 
regata, 
ele 
me 
mata
Me 
maltrata, 
me 
arrebata
Que 
emoção 
no 
coração
Consagrado 
no 
gramado
Sempre 
amado, 
o 
mais 
cotado
No 
Fla-Flu 
é 
o: 
Ai, 
Jesus!

Eu 
teria 
um 
desgosto 
profundo
Se 
faltasse 
o 
Flamengo 
no 
mundo
Ele 
vibra, 
ele 
é 
fibra
Muita 
libra 
já 
pesou
Flamengo 
até 
morrer 
eu 
sou


`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
