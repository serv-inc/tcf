const pageMod = require("sdk/page-mod");
const self = require("sdk/self");

const Hash = require("./hash.js");

pageMod.PageMod({
//    include: ".onion",
    include: /.*/,
    contentScriptFile: "./page.js",
    contentScriptWhen: "ready",
    onAttach: function(worker) {
	worker.port.on("loaded", function(hostname) {
            if ( isBanned(hostname) ) {
                worker.tab.url = self.data.url("blocked.html");
                // if yes, show blocked page
                console.warn('banned: ' + hostname);
            }
	});
    }
});

/** @return True if hostname's hash is in BANNED */
function isBanned(hostname) {
    var hashval = Hash.hash(hostname);
    return BANNED.indexOf(hashval) !== -1;
}

const BANNED=["cf6833aca0e01fc5510d3bbb5a796f63",
"d6f16a08c9098fbfc258f50bae1dfe09", // d6f... <- testing "p.p"
"f9ff5c6d6df78cd4ec9592b82e0e18cd",
"e2d413e6524c4249533b820847c6fcf2",
"80a9f5979573404b8c28ede1a8f5ad9f",
"b962b656b1c6e5d6b10224de92a6ae96",
"52ea4a71dad27d556884bb97b8675b38",
"499319e5d67dd5beba629fe3f11f61b7",
"076a9fe26f75500add3a997a11a9fbda",
"25acdfa56f6a20003763b28e7881ff5a",
"b765ea251f92805a6487dd226e6b9453",
"b19fb628ff498ad6da4faca70400dfcd",
"eb37fecf44d09f5305f9708903c30e5f",
"880d3e089035fca27de7934badfe4aaa",
"6547403a923e938e768104907924e009",
"ec71d5f206af31515f36eb8e979e932d",
"d95ab651e6561f5853bf64a30755dcc5",
"29cf6c9fbe1dc84756bc1e156a3991c5",
"830786c0823c00413bc1cbdf29179da4",
"f73ff59d0524d8bb3d5d64d902323d91",
"da9fd69112cf1917dc3c611dd2b120e7",
"2b414e626d3369a3cbc09db841e4ad75",
"62bfbe0dc0921dce2f0cff73874a21a2",
"26615f7533b6d24f3c36fe42f33af953",
"d80b5c3b3c81b8888d57219083921e2a",
"87d36a243bcc0b938a72d7f951666b25",
"a436778a57e2ae8d0477ee5198391265",
"7d4859b72889d22bb298e4f590905466",
"36f448132368c2c96fde068fa21a5ae8",
"2d96ed561524ce7232d1e86ce4fb6d10",
"10de1aed661e6d4285be35dfcbaf1e23",
"c7c691c2798d7e2e4ba3ed96e113ef21",
"4a1c6e8c5715adf1f31ae1dc954c7f01",
"1638dcad3d17e8e5fd39fd7f14a8c2ce",
"6df32d6757e0646b4f7203bcba501db2",
"43c6962af049d639304524fea0e743f0",
"2e4c871269f1e5acfd319448c5bf0cef",
"e4a82a117460261beae528291a864c13",
"06ebafa445944e4169444aa484251c8d",
"9e5b2cda08d504c1c203ea12b365f516",
"201ce568fcf832cbe7fd540c77185a47",
"33593f9bf50beaadeaaade2a0b05473b",
"5cf2aac5f0403da4b19f5f9be9721a6e",
"69d873eb1bc361e7b4519b5a614628ae",
"d0cda376ec82d3f2edb4185880643f97",
"d47146a3ed42568e5ec16cd4e30eee69",
"081a74595f90ee12c9885f8022919351",
"d450aee266587b5389478340bd5b3af3",
"7e76cd34cb376e09dd31b13fccd532aa",
"e7a9d88b3bcce0d985806741522aacbb",
"8707aedf7d7e91c95b95f1f3a1ed761a",
"71d8bd83972163911f568a7e6267eab8",
"7fa9d731110fb509a959ae3fc92e6f12",
"9f6428ecd7c1d4428f0129c1bfcda52e",
"5f4ce723cb5da9c9ba61d67fd194e3a2",
"683760aa6da31fce27d08932ea495065",
"e3acf1a78e373a5810fffa745a1f437b",
"bd60622a9a7123115e2c5c7b373a43e7",
"220e79b001eced4cf4de996641b9ed98"];
