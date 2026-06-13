const fs = require('fs');
let content = fs.readFileSync('/workspace/my-app/index.html', 'utf8');

const newUI = `
    <!-- Section 1. Breadcrumb -->
    <nav aria-label="Breadcrumb" class="max-[1200px] max-w-[1200px] mx-auto px-4 md:px-10 py-4">
      <ol class="flex text-[12px] text-[#636972] m-0 p-0 list-none">
        <li><a href="/" class="hover:text-[#4B5056] text-[#636972] no-underline">Strikingly</a></li>
        <li class="mx-2 text-brand-purple">&gt;</li>
        <li class="text-[#636972]" aria-current="page">AI Generators</li>
      </ol>
    </nav>
`;
const parts = content.split('</header>');
if (parts.length === 2) {
    fs.writeFileSync('/workspace/my-app/index.html', parts[0] + '</header>' + newUI + parts[1]);
    console.log("Success");
} else {
    console.log("Failed. Parts length:", parts.length);
}
