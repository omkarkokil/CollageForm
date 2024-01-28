## Getting Started

This is my college project which is built in next js i am trying prisma tailwind css shadcn ui and overall:

<pre>
college-moder/
├─ components.json .... 
├─ next-env.d.ts ...... 
├─ next.config.js ..... 
├─ package.json ....... 
├─ postcss.config.js .. 
├─ README.md .......... 
├─ tailwind.config.js . 
├─ tailwind.config.ts . 
├─ tsconfig.json ...... 
├─ yarn.lock .......... 
├─ app/ ............... 
│  ├─ layout.tsx ...... 
│  ├─ loader.tsx ...... 
│  ├─ page.tsx ........ 
│  └─ (essential)/ .... 
│     ├─ favicon.ico .. 
│     └─ globals.css .. 
├─ components/ ........ 
│  └─ ui/ ............. 
│     └─ sheet.tsx .... 
├─ lib/ ............... 
│  └─ utils.ts ........ 
└─ public/ ............ 
   ├─ next.svg ........ 
   └─ vercel.svg ...... 
</pre>
<!-- DIRSTRUCTURE_START_MARKER -->
<pre>
college-moder/
├─ components.json .............................. 
├─ docker-compose.yml ........................... 
├─ Dockerfile ................................... 
├─ next-env.d.ts ................................ 
├─ next.config.js ............................... 
├─ package-lock.json ............................ 
├─ package.json ................................. 
├─ postcss.config.js ............................ 
├─ README.md .................................... 
├─ tailwind.config.js ........................... 
├─ tailwind.config.ts ........................... 
├─ tsconfig.json ................................ 
├─ yarn.lock .................................... 
├─ app/ ......................................... 
│  ├─ layout.tsx ................................ 
│  ├─ loader.tsx ................................ 
│  ├─ middleware.ts ............................. 
│  ├─ page.tsx .................................. 
│  ├─ (essential)/ .............................. 
│  │  └─ globals.css ............................ 
│  ├─ academic-assets/ .......................... 
│  │  ├─ page.tsx ............................... 
│  │  └─ components/ ............................ 
│  │     ├─ form.tsx ............................ 
│  │     └─ steps/ .............................. 
│  │        ├─ components/ ...................... 
│  │        │  ├─ column.tsx .................... 
│  │        │  └─ data-table.tsx ................ 
│  │        ├─ step1/ ........................... 
│  │        │  ├─ step1.tsx ..................... 
│  │        │  └─ components/ ................... 
│  │        │     ├─ column.tsx ................. 
│  │        │     ├─ mini-form.tsx .............. 
│  │        │     └─ table.tsx .................. 
│  │        ├─ step2/ ........................... 
│  │        │  ├─ step2.tsx ..................... 
│  │        │  └─ components/ ................... 
│  │        │     ├─ column.tsx ................. 
│  │        │     ├─ mini-form.tsx .............. 
│  │        │     └─ table.tsx .................. 
│  │        ├─ step3/ ........................... 
│  │        │  ├─ step3.tsx ..................... 
│  │        │  └─ components/ ................... 
│  │        │     ├─ column.tsx ................. 
│  │        │     ├─ mini-form.tsx .............. 
│  │        │     └─ table.tsx .................. 
│  │        └─ step4/ ........................... 
│  │           ├─ step4.tsx ..................... 
│  │           └─ components/ ................... 
│  │              ├─ column.tsx ................. 
│  │              ├─ mini-form.tsx .............. 
│  │              └─ table.tsx .................. 
│  ├─ academic-duties/ .......................... 
│  │  ├─ page.tsx ............................... 
│  │  └─ components/ ............................ 
│  │     ├─ form.tsx ............................ 
│  │     └─ steps/ .............................. 
│  │        ├─ components/ ...................... 
│  │        │  ├─ column.tsx .................... 
│  │        │  └─ data-table.tsx ................ 
│  │        ├─ step1/ ........................... 
│  │        │  ├─ step2.tsx ..................... 
│  │        │  └─ components/ ................... 
│  │        │     ├─ column.tsx ................. 
│  │        │     ├─ mini-form.tsx .............. 
│  │        │     └─ table.tsx .................. 
│  │        ├─ step2/ ........................... 
│  │        │  ├─ step2.tsx ..................... 
│  │        │  └─ components/ ................... 
│  │        │     ├─ column.tsx ................. 
│  │        │     ├─ mini-form.tsx .............. 
│  │        │     └─ table.tsx .................. 
│  │        ├─ step3/ ........................... 
│  │        │  ├─ step3.tsx ..................... 
│  │        │  └─ components/ ................... 
│  │        │     ├─ column.tsx ................. 
│  │        │     ├─ mini-form.tsx .............. 
│  │        │     └─ table.tsx .................. 
│  │        ├─ step4/ ........................... 
│  │        │  ├─ step4.tsx ..................... 
│  │        │  └─ components/ ................... 
│  │        │     ├─ column.tsx ................. 
│  │        │     ├─ mini-form.tsx .............. 
│  │        │     └─ table.tsx .................. 
│  │        └─ step5/ ........................... 
│  │           ├─ step5.tsx ..................... 
│  │           └─ components/ ................... 
│  │              ├─ column.tsx ................. 
│  │              ├─ mini-form.tsx .............. 
│  │              └─ table.tsx .................. 
│  ├─ academic-evaluation/ ...................... 
│  │  ├─ page.tsx ............................... 
│  │  └─ components/ ............................ 
│  │     ├─ form.tsx ............................ 
│  │     ├─ year.tsx ............................ 
│  │     └─ steps/ .............................. 
│  │        ├─ components/ ...................... 
│  │        │  ├─ column.tsx .................... 
│  │        │  └─ data-table.tsx ................ 
│  │        ├─ step1/ ........................... 
│  │        │  ├─ step1.tsx ..................... 
│  │        │  └─ components/ ................... 
│  │        │     └─ mini-form.tsx .............. 
│  │        ├─ step2/ ........................... 
│  │        │  ├─ step2.tsx ..................... 
│  │        │  └─ components/ ................... 
│  │        │     └─ mini-form.tsx .............. 
│  │        ├─ step3/ ........................... 
│  │        │  ├─ step3.tsx ..................... 
│  │        │  └─ components/ ................... 
│  │        │     └─ mini-form.tsx .............. 
│  │        ├─ step4/ ........................... 
│  │        │  ├─ step4.tsx ..................... 
│  │        │  └─ components/ ................... 
│  │        │     └─ mini-form.tsx .............. 
│  │        ├─ step5/ ........................... 
│  │        │  ├─ step5.tsx ..................... 
│  │        │  └─ components/ ................... 
│  │        │     └─ mini-form.tsx .............. 
│  │        └─ step6/ ........................... 
│  │           ├─ step6.tsx ..................... 
│  │           └─ components/ ................... 
│  │              ├─ column.tsx ................. 
│  │              ├─ mini-form.tsx .............. 
│  │              └─ table.tsx .................. 
│  ├─ academic-intutivenes/ ..................... 
│  │  ├─ page.tsx ............................... 
│  │  └─ components/ ............................ 
│  │     ├─ form.tsx ............................ 
│  │     └─ steps/ .............................. 
│  │        ├─ components/ ...................... 
│  │        │  ├─ column.tsx .................... 
│  │        │  └─ data-table.tsx ................ 
│  │        ├─ step1/ ........................... 
│  │        │  ├─ step1.tsx ..................... 
│  │        │  └─ components/ ................... 
│  │        │     ├─ column.tsx ................. 
│  │        │     ├─ mini-form.tsx .............. 
│  │        │     └─ table.tsx .................. 
│  │        ├─ step2/ ........................... 
│  │        │  ├─ step2.tsx ..................... 
│  │        │  └─ components/ ................... 
│  │        │     ├─ column.tsx ................. 
│  │        │     ├─ mini-form.tsx .............. 
│  │        │     └─ table.tsx .................. 
│  │        ├─ step3/ ........................... 
│  │        │  ├─ step3.tsx ..................... 
│  │        │  └─ components/ ................... 
│  │        │     ├─ column.tsx ................. 
│  │        │     ├─ mini-form.tsx .............. 
│  │        │     └─ table.tsx .................. 
│  │        ├─ step4/ ........................... 
│  │        │  ├─ step4.tsx ..................... 
│  │        │  └─ components/ ................... 
│  │        │     ├─ column.tsx ................. 
│  │        │     ├─ mini-form.tsx .............. 
│  │        │     └─ table.tsx .................. 
│  │        └─ step5/ ........................... 
│  │           ├─ step5.tsx ..................... 
│  │           └─ components/ ................... 
│  │              ├─ column.tsx ................. 
│  │              ├─ mini-form.tsx .............. 
│  │              └─ table.tsx .................. 
│  ├─ academic-intutivenes.1/ ................... 
│  │  └─ components/ ............................ 
│  │     └─ steps/ .............................. 
│  │        ├─ components/ ...................... 
│  │        ├─ step1/ ........................... 
│  │        │  └─ components/ ................... 
│  │        ├─ step2/ ........................... 
│  │        │  └─ components/ ................... 
│  │        ├─ step3/ ........................... 
│  │        │  └─ components/ ................... 
│  │        ├─ step4/ ........................... 
│  │        │  └─ components/ ................... 
│  │        └─ step5/ ........................... 
│  │           └─ components/ ................... 
│  ├─ api/ ...................................... 
│  │  ├─ auth/ .................................. 
│  │  │  └─ [...nextauth]/ ...................... 
│  │  │     └─ route.ts ......................... 
│  │  ├─ form/ .................................. 
│  │  │  ├─ route.ts ............................ 
│  │  │  ├─ achievements/ ....................... 
│  │  │  │  ├─ route.ts ......................... 
│  │  │  │  └─ [achievementsId]/ ................ 
│  │  │  │     └─ route.ts ...................... 
│  │  │  ├─ books/ .............................. 
│  │  │  │  ├─ route.ts ......................... 
│  │  │  │  └─ [bookId]/ ........................ 
│  │  │  │     └─ route.ts ...................... 
│  │  │  ├─ cActivity/ .......................... 
│  │  │  │  ├─ route.tsx ........................ 
│  │  │  │  └─ [cActivityId]/ ................... 
│  │  │  │     └─ route.ts ...................... 
│  │  │  ├─ copyRight/ .......................... 
│  │  │  │  ├─ route.ts ......................... 
│  │  │  │  └─ [copyrightId]/ ................... 
│  │  │  │     └─ route.ts ...................... 
│  │  │  ├─ duties/ ............................. 
│  │  │  │  ├─ route.ts ......................... 
│  │  │  │  └─ [dutiesId]/ ...................... 
│  │  │  │     └─ route.ts ...................... 
│  │  │  ├─ efforts-extra-curriculum/ ........... 
│  │  │  │  ├─ route.ts ......................... 
│  │  │  │  └─ [effortId]/ ...................... 
│  │  │  │     └─ route.ts ...................... 
│  │  │  ├─ evaluation/ ......................... 
│  │  │  │  ├─ route.ts ......................... 
│  │  │  │  └─ [tradeMarkId]/ ................... 
│  │  │  │     └─ route.ts ...................... 
│  │  │  ├─ feedback/ ........................... 
│  │  │  │  └─ route.ts ......................... 
│  │  │  ├─ irg/ ................................ 
│  │  │  │  ├─ route.ts ......................... 
│  │  │  │  └─ [irgId]/ ......................... 
│  │  │  │     └─ route.ts ...................... 
│  │  │  ├─ kepAttended/ ........................ 
│  │  │  │  ├─ route.ts ......................... 
│  │  │  │  └─ [kepId]/ ......................... 
│  │  │  │     └─ route.ts ...................... 
│  │  │  ├─ kepOrganized/ ....................... 
│  │  │  │  ├─ route.ts ......................... 
│  │  │  │  └─ [kepId]/ ......................... 
│  │  │  │     └─ route.ts ...................... 
│  │  │  ├─ patents/ ............................ 
│  │  │  │  ├─ route.ts ......................... 
│  │  │  │  └─ [patentId]/ ...................... 
│  │  │  │     └─ route.ts ...................... 
│  │  │  ├─ publication/ ........................ 
│  │  │  │  ├─ route.ts ......................... 
│  │  │  │  └─ [pubilcationId]/ ................. 
│  │  │  │     └─ route.ts ...................... 
│  │  │  ├─ reasearch/ .......................... 
│  │  │  │  ├─ route.ts ......................... 
│  │  │  │  └─ [reasearchId]/ ................... 
│  │  │  │     └─ route.ts ...................... 
│  │  │  ├─ responsibilityDepartment/ ........... 
│  │  │  │  ├─ route.ts ......................... 
│  │  │  │  └─ [responsibilityDepartmentId]/ .... 
│  │  │  │     └─ route.ts ...................... 
│  │  │  ├─ responsibilityInsitute/ ............. 
│  │  │  │  ├─ route.ts ......................... 
│  │  │  │  └─ [responsibilityInsituteId]/ ...... 
│  │  │  │     └─ route.ts ...................... 
│  │  │  ├─ teaching-learning/ .................. 
│  │  │  │  ├─ route.ts ......................... 
│  │  │  │  └─ [formId]/ ........................ 
│  │  │  │     └─ route.ts ...................... 
│  │  │  └─ tradeMark/ .......................... 
│  │  │     ├─ route.ts ......................... 
│  │  │     └─ [tradeMarkId]/ ................... 
│  │  │        └─ route.ts ...................... 
│  │  └─ signup/ ................................ 
│  │     └─ route.ts ............................ 
│  ├─ confirmation/ ............................. 
│  │  ├─ form.tsx ............................... 
│  │  ├─ page.tsx ............................... 
│  │  └─ components/ ............................ 
│  │     ├─ download-button.tsx ................. 
│  │     ├─ header-text.tsx ..................... 
│  │     ├─ table.tsx ........................... 
│  │     ├─ academic/ ........................... 
│  │     │  ├─ academic-appraisel.tsx ........... 
│  │     │  └─ components/ ...................... 
│  │     │     ├─ term-I-current..tsx ........... 
│  │     │     ├─ term-II-current.tsx ........... 
│  │     │     └─ term-II-previous.tsx .......... 
│  │     ├─ achievement/ ........................ 
│  │     │  ├─ achievement.tsx .................. 
│  │     │  └─ components/ ...................... 
│  │     │     ├─ column.tsx .................... 
│  │     │     └─ table.tsx ..................... 
│  │     ├─ books/ .............................. 
│  │     │  ├─ books.tsx ........................ 
│  │     │  └─ components/ ...................... 
│  │     │     └─ column.tsx .................... 
│  │     ├─ cActivities/ ........................ 
│  │     │  ├─ cActivities.tsx .................. 
│  │     │  └─ components/ ...................... 
│  │     │     └─ column.tsx .................... 
│  │     ├─ duties/ ............................. 
│  │     │  ├─ duties.tsx ....................... 
│  │     │  └─ components/ ...................... 
│  │     │     └─ row-span.tsx .................. 
│  │     ├─ efforts/ ............................ 
│  │     │  └─ efforts.tsx ...................... 
│  │     ├─ evaluation-form/ .................... 
│  │     │  ├─ evaluation-form.tsx .............. 
│  │     │  ├─ html2pdf.d.ts .................... 
│  │     │  └─ components/ ...................... 
│  │     │     ├─ evaluation-footer.tsx ......... 
│  │     │     ├─ evaluation-row.tsx ............ 
│  │     │     ├─ evaluation-table.tsx .......... 
│  │     │     └─ interface.d.ts ................ 
│  │     ├─ feedback/ ........................... 
│  │     │  ├─ feedback-info.tsx ................ 
│  │     │  └─ components/ ...................... 
│  │     │     ├─ bottom.tsx .................... 
│  │     │     ├─ header.tsx .................... 
│  │     │     └─ row.tsx ....................... 
│  │     ├─ header/ ............................. 
│  │     │  └─ header.tsx ....................... 
│  │     ├─ irg/ ................................ 
│  │     │  ├─ irg.tsx .......................... 
│  │     │  └─ components/ ...................... 
│  │     │     └─ column.tsx .................... 
│  │     ├─ kms-attended/ ....................... 
│  │     │  ├─ kms-attended.tsx ................. 
│  │     │  └─ components/ ...................... 
│  │     │     └─ column.tsx .................... 
│  │     ├─ kms-organized/ ...................... 
│  │     │  ├─ kms-organized.tsx ................ 
│  │     │  └─ components/ ...................... 
│  │     │     └─ column.tsx .................... 
│  │     ├─ patents/ ............................ 
│  │     │  ├─ patents.tsx ...................... 
│  │     │  └─ components/ ...................... 
│  │     │     ├─ copyRightColumn.tsx ........... 
│  │     │     ├─ patentColumn.tsx .............. 
│  │     │     └─ trademarkColumn.tsx ........... 
│  │     ├─ personal/ ........................... 
│  │     │  ├─ personal-info.tsx ................ 
│  │     │  └─ components/ ...................... 
│  │     │     └─ text-field.tsx ................ 
│  │     ├─ publication/ ........................ 
│  │     │  ├─ publication.tsx .................. 
│  │     │  └─ components/ ...................... 
│  │     │     └─ column.tsx .................... 
│  │     ├─ reasearch/ .......................... 
│  │     │  ├─ reasearch.tsx .................... 
│  │     │  └─ components/ ...................... 
│  │     │     ├─ column.tsx .................... 
│  │     │     └─ table.tsx ..................... 
│  │     └─ responsibility/ ..................... 
│  │        ├─ responsibilty.tsx ................ 
│  │        └─ components/ ...................... 
│  │           ├─ department-responsibility.tsx . 
│  │           └─ institute-responsibility.tsx .. 
│  ├─ hod/ ...................................... 
│  │  └─ page.tsx ............................... 
│  ├─ login/ .................................... 
│  │  ├─ loader.tsx ............................. 
│  │  ├─ page.tsx ............................... 
│  │  └─ components/ ............................ 
│  │     └─ login-form.tsx ...................... 
│  ├─ signup/ ................................... 
│  │  ├─ loader.tsx ............................. 
│  │  ├─ page.tsx ............................... 
│  │  └─ components/ ............................ 
│  │     └─ signup-form.tsx ..................... 
│  └─ waiting/ .................................. 
│     ├─ loader.tsx ............................. 
│     └─ page.tsx ............................... 
├─ components/ .................................. 
│  ├─ toggle-button.tsx ......................... 
│  ├─ Loader/ ................................... 
│  │  └─ loader.tsx ............................. 
│  ├─ Navbar/ ................................... 
│  │  └─ navbar.tsx ............................. 
│  ├─ step-form/ ................................ 
│  │  ├─ bottom.tsx ............................. 
│  │  ├─ form-wrapper.tsx ....................... 
│  │  └─ header.tsx ............................. 
│  └─ ui/ ....................................... 
│     ├─ accordion.tsx .......................... 
│     ├─ alert.tsx .............................. 
│     ├─ button.tsx ............................. 
│     ├─ calendar.tsx ........................... 
│     ├─ checkbox.tsx ........................... 
│     ├─ form.tsx ............................... 
│     ├─ input.tsx .............................. 
│     ├─ label.tsx .............................. 
│     ├─ menubar.tsx ............................ 
│     ├─ popover.tsx ............................ 
│     ├─ select.tsx ............................. 
│     ├─ sheet.tsx .............................. 
│     └─ table.tsx .............................. 
├─ custom-hooks/ ................................ 
│  └─ useStepForm.tsx ........................... 
├─ hook/ ........................................ 
│  └─ useProfileMutation.ts ..................... 
├─ lib/ ......................................... 
│  ├─ auth.ts ................................... 
│  ├─ functions.ts .............................. 
│  ├─ next-auth.d.ts ............................ 
│  ├─ prisma.ts ................................. 
│  └─ utils.ts .................................. 
├─ prisma/ ...................................... 
│  └─ schema.prisma ............................. 
├─ public/ ...................................... 
│  ├─ biglogo.svg ............................... 
│  ├─ email.svg ................................. 
│  ├─ Log.svg ................................... 
│  ├─ Vectorup-1.svg ............................ 
│  ├─ Vectorup-10.svg ........................... 
│  ├─ Vectorup-11.svg ........................... 
│  ├─ Vectorup-12.svg ........................... 
│  ├─ Vectorup-13.svg ........................... 
│  ├─ Vectorup-14.svg ........................... 
│  ├─ Vectorup-15.svg ........................... 
│  ├─ Vectorup-16.svg ........................... 
│  ├─ Vectorup-17.svg ........................... 
│  ├─ Vectorup-18.svg ........................... 
│  ├─ Vectorup-19.svg ........................... 
│  ├─ Vectorup-2.svg ............................ 
│  ├─ Vectorup-20.svg ........................... 
│  ├─ Vectorup-21.svg ........................... 
│  ├─ Vectorup-22.svg ........................... 
│  ├─ Vectorup-23.svg ........................... 
│  ├─ Vectorup-24.svg ........................... 
│  ├─ Vectorup-25.svg ........................... 
│  ├─ Vectorup-26.svg ........................... 
│  ├─ Vectorup-27.svg ........................... 
│  ├─ Vectorup-28.svg ........................... 
│  ├─ Vectorup-29.svg ........................... 
│  ├─ Vectorup-3.svg ............................ 
│  ├─ Vectorup-30.svg ........................... 
│  ├─ Vectorup-31.svg ........................... 
│  ├─ Vectorup-32.svg ........................... 
│  ├─ Vectorup-33.svg ........................... 
│  ├─ Vectorup-34.svg ........................... 
│  ├─ Vectorup-35.svg ........................... 
│  ├─ Vectorup-4.svg ............................ 
│  ├─ Vectorup-5.svg ............................ 
│  ├─ Vectorup-6.svg ............................ 
│  ├─ Vectorup-7.svg ............................ 
│  ├─ Vectorup-8.svg ............................ 
│  ├─ Vectorup-9.svg ............................ 
│  └─ Vectorup.svg .............................. 
└─ wrappers/ .................................... 
   ├─ auth-provider.tsx ......................... 
   ├─ query-client-wrapper.tsx .................. 
   └─ theme-provider.tsx ........................ 
</pre>
<!-- DIRSTRUCTURE_END_MARKER -->
