"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7515],{51156:function(e,r,a){var t=a(81882),o="pages/setPassword";r.Z=(0,t.vU)({title:{id:"".concat(o,"/title"),defaultMessage:"Ustaw nowe has\u0142o"},titleTrialSignup:{id:"".concat(o,"/titleTrialSignup"),defaultMessage:"Zako\u0144cz rejestracj\u0119 ustawiaj\u0105c has\u0142o"},oldPassword:{id:"".concat(o,"/oldPassword"),defaultMessage:"Aktualne has\u0142o"},newPassword:{id:"".concat(o,"/newPassword"),defaultMessage:"Nowe has\u0142o"},repeatNewPassword:{id:"".concat(o,"/repeatNewPassword"),defaultMessage:"Powt\xf3rz nowe has\u0142o"},wrongPasswordFormat:{id:"".concat(o,"/wrongPasswordFormat"),defaultMessage:"Nieprawid\u0142owy format has\u0142a."},ctaChangePassword:{id:"".concat(o,"/ctaChangePassword"),defaultMessage:"Zmie\u0144 has\u0142o"},ctaSavePassword:{id:"".concat(o,"/ctaSavePassword"),defaultMessage:"Zapisz has\u0142o"},cannotSetPassword:{id:"".concat(o,"/cannotSetPassword"),defaultMessage:"Nie uda\u0142o si\u0119 ustawi\u0107 nowego has\u0142a. "},encouragement:{id:"".concat(o,"/encouragement"),defaultMessage:"Tworzenie mocnego has\u0142a wcale nie jest trudne. Po prostu, zamiast o ha\u015ble, pomy\u015bl o ca\u0142ym d\u0142u\u017cszym wyra\u017ceniu \u2014 \u0142atwym do zapami\u0119tania dla Ciebie, ale trudnym do odgadni\u0119cia dla innych."},helpCenter:{id:"".concat(o,"/helpCenter"),defaultMessage:"Centrum pomocy"},securePasswordTutorial:{id:"".concat(o,"/securePasswordTutorial"),defaultMessage:"Zobacz w jaki spos\xf3b utworzy\u0107 silne has\u0142o."},addPhoneDescription:{id:"".concat(o,"/addPhoneDescription"),defaultMessage:"Dodaj numer telefonu do swojego konta, dzi\u0119ki temu nast\u0119pnym razem \u0142atwiej odzyskasz dost\u0119p."},phoneLabel:{id:"".concat(o,"/phoneLabel"),defaultMessage:"Numer telefonu (opcjonalnie)."},passwordChangedTitle:{id:"".concat(o,"/passwordChangedTitle"),defaultMessage:"Twoje has\u0142o zosta\u0142o pomy\u015blnie zmienione."},passwordChangedDescription:{id:"".concat(o,"/passwordChangedDescription"),defaultMessage:"Ze wzgl\u0119d\xf3w bezpiecze\u0144stwa automatycznie wylogowali\u015bmy Ci\u0119 na wszystkich urz\u0105dzeniach, na kt\xf3rych korzysta\u0142e\u015b/-a\u015b z tego konta."},passwordChangedDescriptionReminder:{id:"".concat(o,"/passwordChangedDescriptionReminder"),defaultMessage:"Has\u0142o do konta {email} zosta\u0142o poprawnie zmienione.{br}{br}Ze wzgl\u0119d\xf3w bezpiecze\u0144stwa automatycznie wylogowali\u015bmy Ci\u0119 na wszystkich urz\u0105dzeniach, na kt\xf3rych korzysta\u0142e\u015b/-a\u015b z tego konta.{br}{br}Kliknij w poni\u017cszy przycisk, aby zalogowa\u0107 si\u0119 ponownie."},ctaLogin:{id:"".concat(o,"/ctaLogin"),defaultMessage:"Zaloguj"},submitError:{id:"".concat(o,"/submitError"),defaultMessage:"Nie uda\u0142o si\u0119 zmieni\u0107 has\u0142a."},submitErrorABFBlockade:{id:"".concat(o,"/submitErrorABFBlockade"),defaultMessage:"Na konto zosta\u0142a na\u0142o\u017cona blokada spowodowana za du\u017c\u0105 liczb\u0105 pr\xf3b logowania, prosimy spr\xf3bowa\u0107 si\u0119 zalogowa\u0107 za godzin\u0119."},oldPasswordLackError:{id:"".concat(o,"/oldPasswordLackError"),defaultMessage:"Wprowad\u017a aktualne has\u0142o."},oldPasswordError:{id:"".concat(o,"/oldPasswordError"),defaultMessage:"Aktualne has\u0142o jest nieprawid\u0142owe."},newPasswordError:{id:"".concat(o,"/errors/newPasswordError"),defaultMessage:"Wpisz swoje nowe has\u0142o."},eightSignsCheckError:{id:"".concat(o,"/errors/eightSignsCheckError"),defaultMessage:"Has\u0142o musi zawiera\u0107 co najmniej 8 znak\xf3w."},uppercaseCheckError:{id:"".concat(o,"/errors/uppercaseCheckError"),defaultMessage:"Has\u0142o musi posiada\u0107 co najmniej jedn\u0105 wielk\u0105 liter\u0119."},lowercaseCheckError:{id:"".concat(o,"/errors/lowercaseCheckError"),defaultMessage:"Has\u0142o musi posiada\u0107 co najmniej jedn\u0105 ma\u0142\u0105 liter\u0119."},digitCheckError:{id:"".concat(o,"/errors/digitCheckError"),defaultMessage:"Has\u0142o musi posiada\u0107 co najmniej jedn\u0105 cyfr\u0119."},specialSignCheckError:{id:"".concat(o,"/errors/specialSignCheckError"),defaultMessage:"Has\u0142o musi posiada\u0107 co najmniej jeden znak specjalny."},rePasswordIsIdenticalError:{id:"".concat(o,"/errors/rePasswordIsIdenticalError"),defaultMessage:"Nowe i powt\xf3rzone has\u0142a musz\u0105 by\u0107 takie same."},newAndCurrentPasswordAreIdenticalError:{id:"".concat(o,"/errors/newAndCurrentPasswordAreIdenticalError"),defaultMessage:"Nowe i aktualne has\u0142o nie mog\u0105 by\u0107 takie same."},captchaDescription:{id:"".concat(o,"/captchaDescription"),defaultMessage:"Ze wzgl\u0119d\xf3w bezpiecze\u0144stwa, po zmianie has\u0142a, wylogujemy Ci\u0119 ze wszystkich urz\u0105dze\u0144 i us\u0142ug na kt\xf3rych jeste\u015b obecnie zalogowany/-a O!Kontem."},captchaTitle:{id:"".concat(o,"/captchaTitle"),defaultMessage:"Udowodnij, \u017ce nie jeste\u015b robotem:"},wrongNumber:{id:"".concat(o,"/wrongNumber"),defaultMessage:"Wpisz poprawny polski numer telefonu: +48yyyyyyyyy."},fieldRequired:{id:"".concat(o,"/fieldRequired"),defaultMessage:"Pole jest wymagane."},pageTitle:{id:"".concat(o,"/pageTitle"),defaultMessage:"Zmie\u0144 has\u0142o - O!Konto"},pageTitleTrialSignup:{id:"".concat(o,"/pageTitleTrialSignup"),defaultMessage:"Zako\u0144cz rejestracj\u0119 - O!Konto"},errorOccured:{id:"".concat(o,"/errorOccured"),defaultMessage:"Wystapi\u0142 b\u0142\u0105d, spr\xf3buj ponownie"},linkExpiredTitle:{id:"".concat(o,"/linkExpiredTitle"),defaultMessage:"Link w mailu straci\u0142 wa\u017cno\u015b\u0107"},linkExpired:{id:"".concat(o,"/linkWasExpired"),defaultMessage:"Link za\u0142\u0105czony w mailu wygas\u0142, u\u017cyj nowszego linku lub spr\xf3buj ponownie przywr\xf3ci\u0107 has\u0142o."}})},37515:function(e,r,a){a.d(r,{YN:function(){return Z},b1:function(){return b},jE:function(){return h},y_:function(){return x},oH:function(){return p},yR:function(){return y},uo:function(){return f},uM:function(){return j},a$:function(){return g},EY:function(){return z}});var t=a(24246),o=(a(27378),a(78351)),n=a(79758);function s(e){if(!e)return!1;if(10!==e.length)return!1;if(!function(e){var r=new RegExp(/[0-9]/);return e.split("").every((function(e){return r.test(e)}))}(e))return!1;var r=0;[6,5,7,2,3,4,5,6,7].forEach((function(a,t){var o=Number(e[t]);r+=a*o}));var a=r%11;return 10!==a&&a===Number(e[9])}var i=a(78858),d=a(7355),c=a(51156);function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var a=0,t=new Array(r);a<r;a++)t[a]=e[a];return t}function l(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function w(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(r){l(e,r,a[r])}))}return e}function m(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var t,o,n=[],s=!0,i=!1;try{for(a=a.call(e);!(s=(t=a.next()).done)&&(n.push(t.value),!r||n.length!==r);s=!0);}catch(d){i=!0,o=d}finally{try{s||null==a.return||a.return()}finally{if(i)throw o}}return n}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return u(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(e){var r={};return e.email||(r.email=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),i.QT.test(e.email)||(r.email=(0,t.jsx)(o.Z,w({},d.Z.wrongEmailFormat))),r},g=function(e){var r={};return i.se.test(e.phone)||(r.phone=(0,t.jsx)(o.Z,w({},d.Z.wrongNumber))),e.phone||(r.phone=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),r},h=function(e){var r={};return 7!==e.code.length&&(r.code=(0,t.jsx)(o.Z,w({},d.Z.wrongCodeFormat))),e.code||(r.code=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),r},Z=function(e){var r={};return e.name||(r.name=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),e.name&&!i.IA.test(e.name)&&(r.name=(0,t.jsx)(o.Z,w({},d.Z.inCorrectNameFormat))),e.address||(r.address=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),e.postalCode||(r.postalCode=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),i._w.test(e.postalCode)||(r.postalCode=(0,t.jsx)(o.Z,w({},d.Z.inCorrectPostalCode))),e.city||(r.city=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),i.k5.test(null===e||void 0===e?void 0:e.city)||(r.city=(0,t.jsx)(o.Z,w({},d.Z.cityValidation))),r},f=function(e){var r={};if(e.newPassword&&e.newPassword.trim()||(r.newPassword=(0,t.jsx)(o.Z,w({},c.Z.newPasswordError))),e.newPassword){var a=e.newPassword.length>=8,n=/[A-Z]/g.test(e.newPassword),s=/[a-z]/g.test(e.newPassword),i=/[0-9]/g.test(e.newPassword),d=/^[!-~]{6,32}$/g.test(e.newPassword),u=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/g.test(e.newPassword);d&&u||(r.newPassword=(0,t.jsx)(o.Z,w({},c.Z.wrongPasswordFormat))),a?n?i?s||(r.newPassword=(0,t.jsx)(o.Z,w({},c.Z.lowercaseCheckError))):r.newPassword=(0,t.jsx)(o.Z,w({},c.Z.digitCheckError)):r.newPassword=(0,t.jsx)(o.Z,w({},c.Z.uppercaseCheckError)):r.newPassword=(0,t.jsx)(o.Z,w({},c.Z.eightSignsCheckError)),e.rePassword&&e.newPassword===e.rePassword||(r.rePassword=(0,t.jsx)(o.Z,w({},c.Z.rePasswordIsIdenticalError)))}return r},j=function(e){var r={},a=(new Date).getTime(),s=new Date(e.birthDate.year,e.birthDate.month,e.birthDate.day).getTime(),c=new Date(a-s),u=Math.abs(c.getUTCFullYear()-1970),l=e.birthDate,m=l.day,p=l.month,g=l.year;e.name||(r.name=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),e.name&&e.name.trim().split(" ").length<2&&(r.name=(0,t.jsx)(o.Z,w({},d.Z.inCorrectName))),e.name&&!i.IA.test(e.name)&&(r.name=(0,t.jsx)(o.Z,w({},d.Z.inCorrectNameFormat))),e.gender||(r.gender=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),u<n.ot&&(e.parentsEmail||(r.parentsEmail=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),i.QT.test(e.parentsEmail)||(r.parentsEmail=(0,t.jsx)(o.Z,w({},d.Z.wrongEmailFormat))),e.parentsEmail===e.email&&(r.parentsEmail=(0,t.jsx)(o.Z,w({},d.Z.notTheSame)))),u>=n.c7&&(r.birthDate={groupError:(0,t.jsx)(o.Z,w({},d.Z.ageTooHigh)),day:(0,t.jsx)(o.Z,w({},d.Z.ageTooHigh)),month:(0,t.jsx)(o.Z,w({},d.Z.ageTooHigh)),year:(0,t.jsx)(o.Z,w({},d.Z.ageTooHigh))}),s>a&&(r.birthDate={groupError:(0,t.jsx)(o.Z,w({},d.Z.futureDateError)),day:(0,t.jsx)(o.Z,w({},d.Z.futureDateError)),month:(0,t.jsx)(o.Z,w({},d.Z.futureDateError)),year:(0,t.jsx)(o.Z,w({},d.Z.futureDateError))});return m>function(e,r){var a=28;return r&&e&&(a=new Date(parseInt(r,10),parseInt(e,10)+1,0).getDate()),a}(p,g)&&(r.birthDate={groupError:(0,t.jsx)(o.Z,w({},d.Z.inCorrectBirthDate)),day:(0,t.jsx)(o.Z,w({},d.Z.inCorrectBirthDate)),month:(0,t.jsx)(o.Z,w({},d.Z.inCorrectBirthDate)),year:(0,t.jsx)(o.Z,w({},d.Z.inCorrectBirthDate))}),g<1900&&(r.birthDate={groupError:(0,t.jsx)(o.Z,w({},d.Z.inCorrectBirthDate)),year:(0,t.jsx)(o.Z,w({},d.Z.inCorrectBirthDate))}),m||(r.birthDate=w({},r.birthDate,{day:(0,t.jsx)(o.Z,w({},d.Z.requiredField))})),p||(r.birthDate=w({},r.birthDate,{month:(0,t.jsx)(o.Z,w({},d.Z.requiredField))})),g||(r.birthDate=w({},r.birthDate,{year:(0,t.jsx)(o.Z,w({},d.Z.requiredField))})),e.postalCode&&!i._w.test(e.postalCode)&&(r.postalCode=(0,t.jsx)(o.Z,w({},d.Z.inCorrectPostalCode))),r},y=function(e){var r={};return e.alias||(r.email=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),i.k1.test(e.alias)||(r.alias=(0,t.jsx)(o.Z,w({},d.Z.emailHints))),r},b=function(e){return function(r){var a,n=n||{};return null===(a=Object.entries(r.agreements))||void 0===a||a.forEach((function(r){var a,s=m(r,2),i=s[0],c=s[1];(null===(a=e.find((function(e){return e.id===i})))||void 0===a?void 0:a.is_obligatory)&&!c&&(n.agreements||(n.agreements={}),n.agreements[i]=(0,t.jsx)(o.Z,w({},d.Z.consentRequired)))})),n}};function x(e){var r={};return e.nip||(r.nip=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),s(e.nip)||(r.nip=(0,t.jsx)(o.Z,w({},d.Z.wrongNip))),e.companyName||(r.companyName=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),e.companyAddress||(r.companyAddress=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),e.companyPostalCode||(r.companyPostalCode=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),e.companyCity||(r.companyCity=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),e.name||(r.name=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),e.name&&!i.IA.test(e.name)&&(r.name=(0,t.jsx)(o.Z,w({},d.Z.inCorrectNameFormat))),e.phone||(r.phone=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),r}function z(e){var r={};return e.shipmentUserName||(r.shipmentUserName=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),e.shipmentUserName&&!i.IA.test(e.shipmentUserName)&&(r.shipmentUserName=(0,t.jsx)(o.Z,w({},d.Z.inCorrectNameFormat))),e.shipmentStreet||(r.shipmentStreet=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),e.shipmentStreet&&e.shipmentStreet.length>100&&(r.shipmentStreet=(0,t.jsx)(o.Z,w({},d.Z.addressToLong))),e.shipmentPostalCode||(r.shipmentPostalCode=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),e.shipmentCity||(r.shipmentCity=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),e.shipmentPhone||(r.shipmentPhone=(0,t.jsx)(o.Z,w({},d.Z.requiredField))),r}}}]);