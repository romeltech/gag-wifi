import{v as U,r as f,L as D,o as S,c as h,w as e,a,V as B,b as p,d as P,i as d,M as E,g as _,m as g,t as k,N as $,k as G,F as K,A as q,O as H,P as O,I as j,Q as J,j as x,f as I,R as W,h as A,y as N,G as L,S as Z,T as Q,U as Y,W as X,x as aa,C as R,E as ea}from"./app-337bfd4b.js";import{_ as na}from"./pageHeader-522f4fd9.js";import{c as T,a as M,d as la,F,b as y,e as ta}from"./index.esm-ca91be29.js";const oa=x("div",{class:"mb-2 text-body-2"},"Status",-1),sa={__name:"AccountForm",props:["user"],emits:["saved"],setup(w,{emit:V}){const l=w;U(()=>l.user,t=>{n.value.data=t});const n=f({loading:!1,data:l.user}),c=f([{title:"active",color:"success"},{title:"inactive",color:"error"}]),o=D(()=>{let t="";return n.value.data.status=="active"&&(t="success"),n.value.data.status=="inactive"&&(t="error"),t}),v=t=>{n.value.data.status=t},u=f(["normal","admin"]);let r=T({username:M().required(),email:M().email(),phone_no:la().required()});const m=async()=>{let t=n.value.data;n.value.loading=!0,await axios.post("/account/save",t).then(s=>{n.value.loading=!1,V("saved",s.data.message)}).catch(s=>{n.value.loading=!1,console.log(s.response.data)})};return(t,s)=>(S(),h(A,null,{default:e(()=>[a(B,{class:"text-primary text-capitalize mb-3"},{default:e(()=>[p("Account Settings")]),_:1}),a(P,null,{default:e(()=>[a(d(F),{as:"v-form","validation-schema":d(r)},{default:e(()=>[oa,a(E,null,{activator:e(({props:i})=>[a(_,g(i,{class:"mb-6",color:d(o)}),{default:e(()=>[p(k(n.value.data.status),1)]),_:2},1040,["color"])]),default:e(()=>[a($,{density:"compact"},{default:e(()=>[(S(!0),G(K,null,q(c.value,(i,b)=>(S(),h(H,{key:b,value:b,onClick:()=>v(i.title)},{default:e(()=>[a(O,{class:"text-overline d-flex align-center"},{default:e(()=>[a(j,{color:i.color,icon:d(J),class:"mr-1"},null,8,["color","icon"]),x("div",null,k(i.title),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1}),a(d(y),{name:"username",modelValue:n.value.data.username,"onUpdate:modelValue":s[1]||(s[1]=i=>n.value.data.username=i)},{default:e(({field:i,errors:b})=>[a(I,g({modelValue:n.value.data.username,"onUpdate:modelValue":s[0]||(s[0]=C=>n.value.data.username=C)},i,{label:"Username",variant:"outlined",class:"mb-2","error-messages":b}),null,16,["modelValue","error-messages"])]),_:1},8,["modelValue"]),a(d(y),{name:"email",modelValue:n.value.data.email,"onUpdate:modelValue":s[3]||(s[3]=i=>n.value.data.email=i)},{default:e(({field:i,errors:b})=>[a(I,g({modelValue:n.value.data.email,"onUpdate:modelValue":s[2]||(s[2]=C=>n.value.data.email=C)},i,{label:"Email",variant:"outlined",class:"mb-2","error-messages":b}),null,16,["modelValue","error-messages"])]),_:1},8,["modelValue"]),a(d(y),{name:"phone_no",modelValue:n.value.data.phone_no,"onUpdate:modelValue":s[5]||(s[5]=i=>n.value.data.phone_no=i)},{default:e(({field:i,errors:b})=>[a(I,g({modelValue:n.value.data.phone_no,"onUpdate:modelValue":s[4]||(s[4]=C=>n.value.data.phone_no=C)},i,{type:"number",label:"Phone number",variant:"outlined",class:"mb-2","error-messages":b}),null,16,["modelValue","error-messages"])]),_:1},8,["modelValue"]),a(d(y),{name:"role",modelValue:n.value.data.role,"onUpdate:modelValue":s[7]||(s[7]=i=>n.value.data.role=i)},{default:e(({field:i,errors:b})=>[a(W,g({modelValue:n.value.data.role,"onUpdate:modelValue":s[6]||(s[6]=C=>n.value.data.role=C)},i,{items:u.value,label:"Role",variant:"outlined",class:"mb-2","error-messages":b}),null,16,["modelValue","items","error-messages"])]),_:1},8,["modelValue"]),a(_,{color:"primary",size:"large",loading:n.value.loading,onClick:m},{default:e(()=>[p("Save")]),_:1},8,["loading"])]),_:1},8,["validation-schema"])]),_:1})]),_:1}))}},ma=[{name:"Afghanistan"},{name:"Åland Islands"},{name:"Albania"},{name:"Algeria"},{name:"American Samoa"},{name:"Andorra"},{name:"Angola"},{name:"Anguilla"},{name:"Antarctica"},{name:"Antigua and Barbuda"},{name:"Argentina"},{name:"Armenia"},{name:"Aruba"},{name:"Australia"},{name:"Austria"},{name:"Azerbaijan"},{name:"Bahamas"},{name:"Bahrain"},{name:"Bangladesh"},{name:"Barbados"},{name:"Belarus"},{name:"Belgium"},{name:"Belize"},{name:"Benin"},{name:"Bermuda"},{name:"Bhutan"},{name:"Bolivia (Plurinational State of)"},{name:"Bonaire, Sint Eustatius and Saba"},{name:"Bosnia and Herzegovina"},{name:"Botswana"},{name:"Bouvet Island"},{name:"Brazil"},{name:"British Indian Ocean Territory"},{name:"Brunei Darussalam"},{name:"Bulgaria"},{name:"Burkina Faso"},{name:"Burundi"},{name:"Cabo Verde"},{name:"Cambodia"},{name:"Cameroon"},{name:"Canada"},{name:"Cayman Islands"},{name:"Central African Republic"},{name:"Chad"},{name:"Chile"},{name:"China"},{name:"Christmas Island"},{name:"Cocos (Keeling) Islands"},{name:"Colombia"},{name:"Comoros"},{name:"Congo (Republic of the)"},{name:"Congo (Democratic Republic of the)"},{name:"Cook Islands"},{name:"Costa Rica"},{name:"Côte d'Ivoire"},{name:"Croatia"},{name:"Cuba"},{name:"Curaçao"},{name:"Cyprus"},{name:"Czech Republic"},{name:"Denmark"},{name:"Djibouti"},{name:"Dominica"},{name:"Dominican Republic"},{name:"Ecuador"},{name:"Egypt"},{name:"El Salvador"},{name:"Equatorial Guinea"},{name:"Eritrea"},{name:"Estonia"},{name:"Ethiopia"},{name:"Falkland Islands (Malvinas)"},{name:"Faroe Islands"},{name:"Fiji"},{name:"Finland"},{name:"France"},{name:"French Guiana"},{name:"French Polynesia"},{name:"French Southern Territories"},{name:"Gabon"},{name:"Gambia"},{name:"Georgia"},{name:"Germany"},{name:"Ghana"},{name:"Gibraltar"},{name:"Greece"},{name:"Greenland"},{name:"Grenada"},{name:"Guadeloupe"},{name:"Guam"},{name:"Guatemala"},{name:"Guernsey"},{name:"Guinea"},{name:"Guinea-Bissau"},{name:"Guyana"},{name:"Haiti"},{name:"Heard Island and McDonald Islands"},{name:"Vatican City State"},{name:"Honduras"},{name:"Hong Kong"},{name:"Hungary"},{name:"Iceland"},{name:"India"},{name:"Indonesia"},{name:"Iran"},{name:"Iraq"},{name:"Ireland"},{name:"Isle of Man"},{name:"Israel"},{name:"Italy"},{name:"Jamaica"},{name:"Japan"},{name:"Jersey"},{name:"Jordan"},{name:"Kazakhstan"},{name:"Kenya"},{name:"Kiribati"},{name:"Korea (Democratic People's Republic of)"},{name:"Korea (Republic of)"},{name:"Kuwait"},{name:"Kyrgyzstan"},{name:"Lao People's Democratic Republic"},{name:"Latvia"},{name:"Lebanon"},{name:"Lesotho"},{name:"Liberia"},{name:"Libya"},{name:"Liechtenstein"},{name:"Lithuania"},{name:"Luxembourg"},{name:"Macao"},{name:"Macedonia (the former Yugoslav Republic of)"},{name:"Madagascar"},{name:"Malawi"},{name:"Malaysia"},{name:"Maldives"},{name:"Mali"},{name:"Malta"},{name:"Marshall Islands"},{name:"Martinique"},{name:"Mauritania"},{name:"Mauritius"},{name:"Mayotte"},{name:"Mexico"},{name:"Micronesia (Federated States of)"},{name:"Moldova (Republic of)"},{name:"Monaco"},{name:"Mongolia"},{name:"Montenegro"},{name:"Montserrat"},{name:"Morocco"},{name:"Mozambique"},{name:"Myanmar"},{name:"Namibia"},{name:"Nauru"},{name:"Nepal"},{name:"Netherlands"},{name:"New Caledonia"},{name:"New Zealand"},{name:"Nicaragua"},{name:"Niger"},{name:"Nigeria"},{name:"Niue"},{name:"Norfolk Island"},{name:"Northern Mariana Islands"},{name:"Norway"},{name:"Oman"},{name:"Pakistan"},{name:"Palau"},{name:"Palestine, State of"},{name:"Panama"},{name:"Papua New Guinea"},{name:"Paraguay"},{name:"Peru"},{name:"Philippines"},{name:"Pitcairn"},{name:"Poland"},{name:"Portugal"},{name:"Puerto Rico"},{name:"Qatar"},{name:"Réunion"},{name:"Romania"},{name:"Russian Federation"},{name:"Rwanda"},{name:"Saint Barthélemy"},{name:"Saint Helena, Ascension and Tristan da Cunha"},{name:"Saint Kitts and Nevis"},{name:"Saint Lucia"},{name:"Saint Martin (French part)"},{name:"Saint Pierre and Miquelon"},{name:"Saint Vincent and the Grenadines"},{name:"Samoa"},{name:"San Marino"},{name:"Sao Tome and Principe"},{name:"Saudi Arabia"},{name:"Senegal"},{name:"Serbia"},{name:"Seychelles"},{name:"Sierra Leone"},{name:"Singapore"},{name:"Sint Maarten (Dutch part)"},{name:"Slovakia"},{name:"Slovenia"},{name:"Solomon Islands"},{name:"Somalia"},{name:"South Africa"},{name:"South Georgia and the South Sandwich Islands"},{name:"South Sudan"},{name:"Spain"},{name:"Sri Lanka"},{name:"Sudan"},{name:"Suriname"},{name:"Svalbard and Jan Mayen"},{name:"Swaziland"},{name:"Sweden"},{name:"Switzerland"},{name:"Syrian Arab Republic"},{name:"Taiwan, Province of China"},{name:"Tajikistan"},{name:"Tanzania, United Republic of"},{name:"Thailand"},{name:"Timor-Leste"},{name:"Togo"},{name:"Tokelau"},{name:"Tonga"},{name:"Trinidad and Tobago"},{name:"Tunisia"},{name:"Turkey"},{name:"Turkmenistan"},{name:"Turks and Caicos Islands"},{name:"Tuvalu"},{name:"Uganda"},{name:"Ukraine"},{name:"United Arab Emirates"},{name:"United Kingdom of Great Britain and Northern Ireland"},{name:"United States Minor Outlying Islands"},{name:"United States of America"},{name:"Uruguay"},{name:"Uzbekistan"},{name:"Vanuatu"},{name:"Venezuela (Bolivarian Republic of)"},{name:"Vietnam"},{name:"Virgin Islands (British)"},{name:"Virgin Islands (U.S.)"},{name:"Wallis and Futuna"},{name:"Western Sahara"},{name:"Yemen"},{name:"Zambia"},{name:"Zimbabwe"}],ia={__name:"ProfileForm",props:["profile"],emits:["saved"],setup(w,{emit:V}){const l=w,n=N(),c=f(ma);U(()=>l.profile,r=>{o.value.data={...o.value.data,...r}}),L(()=>{o.value.data={...o.value.data,...l.profile}});const o=f({loading:!1,data:{user_id:n.params.id,full_name:null,dob:null,nationality:null}});let v=T({full_name:M(),dob:M(),nationality:M()});const u=async()=>{o.value.loading=!0,await axios.post("/account/profile/save",o.value.data).then(r=>{o.value.loading=!1,V("saved",r.data.message)}).catch(r=>{o.value.loading=!1,console.log(r.response.data)})};return(r,m)=>(S(),h(A,null,{default:e(()=>[a(B,{class:"text-primary text-capitalize mb-3"},{default:e(()=>[p("Profile Settings")]),_:1}),a(P,null,{default:e(()=>[a(d(F),{as:"v-form","validation-schema":d(v)},{default:e(()=>[a(d(y),{name:"full_name",modelValue:o.value.data.full_name,"onUpdate:modelValue":m[1]||(m[1]=t=>o.value.data.full_name=t)},{default:e(({field:t,errors:s})=>[a(I,g({modelValue:o.value.data.full_name,"onUpdate:modelValue":m[0]||(m[0]=i=>o.value.data.full_name=i)},t,{label:"Full name",variant:"outlined",class:"mb-2","error-messages":s}),null,16,["modelValue","error-messages"])]),_:1},8,["modelValue"]),a(d(y),{name:"dob",modelValue:o.value.data.dob,"onUpdate:modelValue":m[2]||(m[2]=t=>o.value.data.dob=t)},{default:e(({field:t,errors:s})=>[a(I,g(t,{type:"date",label:"Date of Birth","model-value":o.value.data.dob,variant:"outlined",class:"mb-2","error-messages":s}),null,16,["model-value","error-messages"])]),_:1},8,["modelValue"]),a(d(y),{name:"nationality",modelValue:o.value.data.nationality,"onUpdate:modelValue":m[4]||(m[4]=t=>o.value.data.nationality=t)},{default:e(({field:t,errors:s})=>[a(Z,g({modelValue:o.value.data.nationality,"onUpdate:modelValue":m[3]||(m[3]=i=>o.value.data.nationality=i)},t,{items:c.value,"item-title":"name","item-value":"name",label:"Nationality",variant:"outlined",class:"mb-2","error-messages":s}),null,16,["modelValue","items","error-messages"])]),_:1},8,["modelValue"]),a(_,{color:"primary",size:"large",loading:o.value.loading,onClick:u},{default:e(()=>[p("Save")]),_:1},8,["loading"])]),_:1},8,["validation-schema"])]),_:1})]),_:1}))}},z={__name:"SnackBar",props:{options:{type:Object,default:null}},setup(w){const V=w,l=f({status:!1,type:"primary",text:"Default Message"});return U(()=>V.options,n=>{l.value={...l.value,...n}}),(n,c)=>(S(),h(Q,{modelValue:l.value.status,"onUpdate:modelValue":c[1]||(c[1]=o=>l.value.status=o),color:l.value.type},{actions:e(()=>[a(_,{color:"white",variant:"text",onClick:c[0]||(c[0]=o=>l.value=!1)},{default:e(()=>[p(" Close ")]),_:1})]),default:e(()=>[p(k(l.value.text)+" ",1)]),_:1},8,["modelValue","color"]))}},ra={class:"d-flex align-center"},ua={__name:"ChangePassword",props:["userId"],setup(w){const V=w,l=f({status:!1,loading:!1,data:{user_id:V.userId,password:"",password_confirmation:""}});let n=T({password:M().min(5).required(),password_confirmation:M().required().oneOf([ta("password")],"Passwords do not match")});const c=f({status:!1,type:"",text:""}),o=async()=>{l.value.loading=!0,await axios.post("/account/change-password",l.value.data).then(v=>{l.value={status:!1,loading:!1,data:{user_id:V.userId,password:"",password_confirmation:""}},c.value={status:!0,type:"success",text:v.data.message}}).catch(v=>{l.value.loading=!1,c.value={status:!0,type:"error",text:"Error while updating password"},console.log(v.response.data)})};return(v,u)=>(S(),G("div",null,[a(X,{modelValue:l.value.status,"onUpdate:modelValue":u[5]||(u[5]=r=>l.value.status=r),persistent:"","max-width":"600"},{activator:e(({props:r})=>[a(_,g({color:"white",size:"large"},r),{default:e(()=>[p(" Change password ")]),_:2},1040)]),default:e(()=>[a(A,{loading:l.value.loading},{default:e(()=>[a(d(F),{as:"v-form","validation-schema":d(n)},{default:e(()=>[a(B,{class:"text-title"},{default:e(()=>[p(" Change password ")]),_:1}),a(P,{class:"pb-6"},{default:e(()=>[a(d(y),{name:"password",modelValue:l.value.data.password,"onUpdate:modelValue":u[1]||(u[1]=r=>l.value.data.password=r)},{default:e(({field:r,errors:m})=>[a(I,g({modelValue:l.value.data.password,"onUpdate:modelValue":u[0]||(u[0]=t=>l.value.data.password=t)},r,{label:"Password",type:"password",variant:"outlined",class:"mb-2","error-messages":m}),null,16,["modelValue","error-messages"])]),_:1},8,["modelValue"]),a(d(y),{name:"password_confirmation",modelValue:l.value.data.password_confirmation,"onUpdate:modelValue":u[3]||(u[3]=r=>l.value.data.password_confirmation=r)},{default:e(({field:r,errors:m})=>[a(I,g({modelValue:l.value.data.password_confirmation,"onUpdate:modelValue":u[2]||(u[2]=t=>l.value.data.password_confirmation=t)},r,{label:"Confirm Password",type:"password",variant:"outlined",class:"mb-2","error-messages":m}),null,16,["modelValue","error-messages"])]),_:1},8,["modelValue"]),x("div",ra,[a(Y),a(_,{color:"grey",variant:"text",onClick:u[4]||(u[4]=r=>l.value.status=!1)},{default:e(()=>[p(" Cancel ")]),_:1}),a(_,{color:"primary",onClick:o},{default:e(()=>[p(" Change password ")]),_:1})])]),_:1})]),_:1},8,["validation-schema"])]),_:1},8,["loading"])]),_:1},8,["modelValue"]),a(z,{options:c.value},null,8,["options"])]))}},da={class:"v-col-12 v-col-md-8"},ca={class:"d-flex flex-wrap"},va={class:"v-col-12 v-col-md-8"},Va={__name:"EditUser",setup(w){const V=N(),l=f(!0),n=f({loading:!1,data:{}}),c=async()=>{l.value=!0,await axios.get("/admin/user/single/"+V.params.id).then(m=>{n.value.data=m.data,l.value=!1}).catch(m=>{n.value.loading=!1,l.value=!1,console.log(m)})},o=m=>{c().then(()=>{r.value={status:!0,type:"success",text:m}})};L(()=>{c()});const v=f("account"),u=async m=>{v.value=m},r=f({status:!0,type:"info",text:null});return(m,t)=>(S(),h(aa,null,{default:e(()=>[a(na,{title:"Edit User"}),a(ea,{class:"mb-3",disabled:l.value},{default:e(()=>[x("div",da,[x("div",ca,[a(_,{color:`${v.value=="account"?"primary":"white"} `,size:"large",class:"mr-3",loading:n.value.loading,onClick:t[0]||(t[0]=()=>u("account"))},{default:e(()=>[p("Account")]),_:1},8,["color","loading"]),a(_,{color:`${v.value=="profile"?"primary":"white"} `,size:"large",class:"mr-3",loading:n.value.loading,onClick:t[1]||(t[1]=()=>u("profile"))},{default:e(()=>[p("profile")]),_:1},8,["color","loading"]),a(ua,{"user-id":1})])]),x("div",va,[v.value=="account"?(S(),h(sa,{key:0,user:n.value.data,onSaved:o},null,8,["user"])):R("",!0),v.value=="profile"?(S(),h(ia,{key:1,profile:n.value.data.profile,onSaved:o},null,8,["profile"])):R("",!0)])]),_:1},8,["disabled"]),a(z,{options:r.value},null,8,["options"])]),_:1}))}};export{Va as default};
