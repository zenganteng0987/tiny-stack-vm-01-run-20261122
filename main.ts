F=require('fs');I=process.env.MAKEFUN_INPUT_DIR||'/input';O=process.env.MAKEFUN_OUTPUT_DIR||'/output';
function V(p,n){let s=[],c=[],m=new Int32Array(256),q=0,t=0,j=0,o='',u,v,w;
try{for(;;){
if(t>999999)throw 10;
if(q<0||q>=p.length)throw 9;
let k=p[q];
if(k>7&&k<16||k>34&&k<48||k>52&&k<64||k>65&&k<80||k>83)throw 5;
let L=k==2?4:k==1?1:k>47&&k<52?2:0;
if(L&&q+L>=p.length)throw 9;
t++;
let N=q+1+L;
let G=()=>(p[q+1]|p[q+2]<<8)<<16>>16;
let U=()=>{if(!s.length)throw 2};
let D=()=>{if(s.length<2)throw 2;v=s.pop();u=s.pop()};
if(k==0)return{exit:0,out:o};
if(k==1){if(s.length>255)throw 3;s.push((p[q+1]<<24)>>24)}
else if(k==2){if(s.length>255)throw 3;s.push(p[q+1]|p[q+2]<<8|p[q+3]<<16|p[q+4]<<24)}
else if(k==3){U();s.pop()}
else if(k==4){U();if(s.length>255)throw 3;s.push(s[s.length-1])}
else if(k==5){if(s.length<2)throw 2;v=s[s.length-1];s[s.length-1]=s[s.length-2];s[s.length-2]=v}
else if(k==6){if(s.length<2)throw 2;if(s.length>255)throw 3;s.push(s[s.length-2])}
else if(k==7){if(s.length<3)throw 2;v=s[s.length-3];s[s.length-3]=s[s.length-2];s[s.length-2]=s[s.length-1];s[s.length-1]=v}
else if(k>15&&k<35){
if(k==23){U();s[s.length-1]=-s[s.length-1]|0}
else if(k==27){U();s[s.length-1]=~s[s.length-1]}
else{D();
if(k==16)s.push(u+v|0);
else if(k==17)s.push(u-v|0);
else if(k==18)s.push(Math.imul(u,v));
else if(k==19){if(!v)throw 4;s.push(Math.trunc(u/v)|0)}
else if(k==20){if(!v)throw 4;s.push(u%v|0)}
else if(k==21){if(!v)throw 4;s.push(Math.floor((u>>>0)/(v>>>0))|0)}
else if(k==22){if(!v)throw 4;s.push((u>>>0)%(v>>>0)|0)}
else if(k==24)s.push(u&v);
else if(k==25)s.push(u|v);
else if(k==26)s.push(u^v);
else if(k==28)s.push(u<<(v&31));
else if(k==29)s.push(u>>(v&31));
else if(k==30)s.push((u>>>(v&31))|0);
else if(k==32)s.push(+(u==v));
else if(k==33)s.push(+(u<v));
else s.push(+((u>>>0)<(v>>>0)));}}
else if(k>47&&k<53){
if(k==48){q=N+G();continue}
else if(k==49||k==50){U();w=s.pop();if((w==0)==(k==49)){q=N+G();continue}}
else if(k==51){if(c.length>63)throw 7;c.push(N);q=p[q+1]|p[q+2]<<8;continue}
else{if(!c.length)throw 8;q=c.pop();continue}}
else if(k>63&&k<66){
if(k==64){U();w=s.pop();if(w<0||w>255)throw 6;s.push(m[w])}
else{D();if(v<0||v>255)throw 6;m[v]=u}}
else if(k>79&&k<84){
if(k==80){U();let g=String(s.pop());if(o.length+g.length>65536)throw 11;o+=g}
else if(k==81){U();if(o.length>65535)throw 11;o+=String.fromCharCode(s.pop()&255)}
else if(k==82){if(s.length>255)throw 3;s.push(j<n.length?n[j++]:-1)}
else{U();return{exit:s.pop()&255,out:o}}}
q=N;
}}catch(e){return{exit:e,out:o}}}
for(let i=1;i<41;i++){let d='i'+('00'+i).slice(-3);let r=V(F.readFileSync(I+'/'+d+'/program.bin'),F.readFileSync(I+'/'+d+'/input.bin'));F.mkdirSync(O+'/'+d,{recursive:true});F.writeFileSync(O+'/'+d+'/stdout.bin',Buffer.from(r.out,'latin1'));F.writeFileSync(O+'/'+d+'/exit.txt',r.exit+'\n')}
