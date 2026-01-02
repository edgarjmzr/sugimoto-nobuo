// Contenido en Japonés Original
const content = {
    home: `
        <div class="fade-in">
            <h2 class="section-title">『琉球わらべうた万華鏡』の世界へようこそ</h2>
            <div class="content-card">
                <p>作曲家・音楽研究家である<strong>杉本信夫 (1934-2022)</strong>。</p>
                <p>彼は1960年代、まだアメリカ施政下にあった沖縄へ渡り、沖縄・奄美の島々を歩きました。そこで古老たちが歌うわらべうたや民謡を採譜し、消えゆく伝承音楽の記録に尽力しました。</p>
            </div>
            
            <div class="quote">
                「伝統の継承とは、創造を含む遺産である」
            </div>

            <div class="content-card">
                <h3>プロジェクトについて</h3>
                <p>杉本信夫は、採集したわらべうたを元に、1,000曲以上のピアノ曲を作曲しました。それが<strong>『琉球わらべうた万華鏡』</strong>です。</p>
                <p>私たち刊行委員会は、この膨大な手書き楽譜を整理・浄書し、ウェブサイトを通じて広く世界へ発信することを目指しています。</p>
            </div>
        </div>
    `,
    profile: `
        <div class="fade-in">
            <h2 class="section-title">プロフィール</h2>
            <div class="content-card">
                <h3>杉本 信夫 (Sugimoto Nobuo)</h3>
                <p><strong>1934年 - 2022年</strong></p>
                <p>大阪府生まれ。1981年より沖縄県糸満市に移住。</p>
                <ul>
                    <li><strong>1964年:</strong> 初めて沖縄を訪問。喜界島から与那国島まで、島々の民謡採集を行う。</li>
                    <li><strong>1975年:</strong> 著書『沖縄の民謡』を出版。</li>
                    <li><strong>教育活動:</strong> 東京葛飾区立立石中学校にて三味線クラブを創設し、生徒たちを引率して沖縄演奏旅行を行うなど、教育者としても情熱を注いだ。</li>
                </ul>
            </div>
        </div>
    `,
    works: `
        <div class="fade-in">
            <h2 class="section-title">作品紹介</h2>
            <div class="content-card">
                <h3>ピアノ曲集『琉球わらべうた万華鏡』</h3>
                <p>全1,045曲におよぶピアノ小品集。沖縄の風土、子供たちの遊び、祭りの風景が音によって鮮やかに描かれています。</p>
                <p>※ 現在、楽譜のデジタル化作業を進行中です。</p>
            </div>
        </div>
    `,
    books: `
        <div class="fade-in">
            <h2 class="section-title">主要著書・論文</h2>
            <div class="content-card">
                <ul>
                    <li><strong>『沖縄の民謡』(1974年):</strong> 埋もれていた民謡215曲を紹介。</li>
                    <li><strong>『三線教本』(1976年):</strong> 東京の中学生のために独自に開発した指導書。</li>
                    <li><strong>『日本わらべうた全集・鹿児島／沖縄のわらべうた』(1980年)</strong></li>
                    <li><strong>『沖縄のサンバ』(2011年):</strong> 打楽器「三板」の教則本。多言語に翻訳されている。</li>
                </ul>
            </div>
        </div>
    `
};

// Router simple
function router(route) {
    const app = document.getElementById('app');
    const buttons = document.querySelectorAll('.nav-btn');
    
    // Renderizar contenido
    if (content[route]) {
        app.innerHTML = content[route];
    } else {
        app.innerHTML = content['home'];
    }

    // Actualizar clase activa en menú
    buttons.forEach(btn => {
        btn.classList.remove('active');
        // Chequeo simple para mantener el estado visual
        if (btn.getAttribute('onclick').includes(route)) {
            btn.classList.add('active');
        }
    });
}

// Cargar Home por defecto
document.addEventListener('DOMContentLoaded', () => {
    router('home');
});