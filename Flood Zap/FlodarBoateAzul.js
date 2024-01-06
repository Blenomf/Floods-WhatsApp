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

Doente de amor
Procurei remédio na vida noturna
Com a flor da noite
Em uma bote aqui na Zona Sul
A dor do amor
É com outro amor que a gente cura
Vim curar a dor
Deste mal de amor na Boate Azul
E quando a noite
Vai se agonizando no clarão da aurora
Os integrantes da vida noturna se foram dormir
E a dama da noite
Estava comigo também foi embora
Fecharam-se as portas
Sozinho de novo tive que sair
Sair de que jeito
Se nem sei o rumo para onde vou
Muito vagamente me lembro que estou
Em uma boate aqui na Zona Sul
Eu bebi demais
E não consigo me lembrar sequer
Qual era o nome daquela mulher
A flor da noite da Boate Azul
Hoje meus dias são de tristeza e solidão
Trago em minha alma uma profunda conformação
Renunciei meu grande amor um dia
Nos braços dela em que tão triste eu dizia
Beijando os lábios do meu amor com frenesi
Não chores, por favor, porque preciso partir
Esse foi o meu ultimo beijo
Satisfiz o meu desejo
O pior foi te perder
Resignemos, oh, querida
Não lamentemos a vida
Nosso destino é sofrer
Saudade, palavra triste
Quando se perde um grande amor
Na estrada longa da vida
Eu vou chorando a minha dor
Igual uma borboleta
Vagando triste por sobre a flor
Teu nome sempre em meus lábios
Irei chamando por onde for
Você nem sequer se lembra
De ouvir a voz desse sofredor
Que implora por seus carinhos
Só um pouquinho do seu amor
Meu primeiro amor
Tão cedo acabou
Só a dor deixou
Nesse peito meu
Meu primeiro amor
Foi como uma flor
Que desabrochou e logo morreu
Nessa solidão
Sem ter alegria
O que me alivia são meus tristes ais
São prantos de dor
Que dos olhos caem
É porque bem sei
Quem eu tanto amei
Não verei jamais
...
...
...
VAMOS DE NOVO? SO QUE DESSA VEZ MAIS PAUSADAMENTE
...
...
...
Doente 
de 
amor
Procurei 
remédio 
na 
vida 
noturna
Com 
a flor 
da 
noite
Em 
uma 
bote 
qui 
na 
Zona 
Sul
A 
dor 
do 
amor
É 
com 
outro 
amor 
que 
a 
gente 
cura
Vim 
curar 
a 
dor
Deste 
mal 
de 
amor 
na 
Boate 
Azul
E 
quando 
a 
noite
Vai 
se 
agonizando 
no 
clarão 
da 
aurora
Os 
integrantes 
da 
vida 
noturna 
se 
foram 
dormir
E 
a 
dama 
da 
noite
Estava 
comigo 
também 
foi 
embora
Fecharam-
se 
as 
portas
Sozinho 
de 
novo 
tive 
que 
sair
Sair 
de 
que 
eito
Se 
nem 
sei 
o 
rumo 
para 
onde 
vou
Muito 
vagamente 
me 
lembro 
que 
estou
Em uma 
boate 
aqui 
na 
Zona 
Sul
Eu 
bebi 
demais
E 
não 
consigo 
me 
lembrar 
sequer
Qual 
era 
o 
nome 
daquela 
mulher
A 
flor 
da 
noite 
da 
Boate 
Azul
Hoje 
meus 
dias 
são 
de 
tristeza 
e 
solidão
Trago 
em 
minha 
alma 
uma 
profunda 
conformação
Renunciei 
meu 
grande 
amor 
um dia
Nos 
braços 
dela 
em 
que 
tão 
triste 
eu 
dizia
Beijando 
os 
lábios 
do 
meu 
amor 
com 
frenesi
Não 
chores, 
por favor, 
porque 
preciso 
partir
Esse 
foi 
o 
meu 
ultimo 
beijo
Satisfiz 
o 
meu 
desejo
O 
pior 
foi 
te 
perder
Resignemos, 
oh, 
querida
Não 
lamentemos 
a 
vida
Nosso 
destino 
é 
sofrer
Saudade,
palavra 
triste
Quando 
se 
perde 
um 
grande 
amor
Na 
estrada 
longa 
da 
vida
Eu 
vou 
chorando 
a 
minha 
dor
Igual 
uma 
borboleta
Vagando 
triste 
por 
sobre 
a 
flor
Teu 
nome 
sempre 
em 
meus 
lábios
Irei 
chamando 
por 
onde 
for
Você 
nem 
sequer 
se 
lembra
De 
ouvir 
a 
voz 
desse 
sofredor
Que 
implora 
por 
seus 
carinhos
Só 
um 
pouquinho 
do 
seu 
amor
Meu 
primeiro 
amor
Tão 
cedo 
acabou
Só 
a 
dor 
Deixou
Nesse 
peito 
meu
Meu 
primeiro 
amor
Foi 
como 
uma 
flor
Que 
desabrochou 
e 
logo 
morreu
Nessa 
solidão
Sem 
ter 
alegria
O 
que 
me 
alivia 
são 
meus 
tristes 
ais
São 
prantos 
de 
dor
Que 
dos 
olhos 
caem
É 
porque 
bem 
sei
Quem 
eu 
tanto 
amei
Não 
verei 
jamais


`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
