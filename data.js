// ═══════════════════════════════════════════════════════════════════════
// HELPER: build item structure
// ═══════════════════════════════════════════════════════════════════════
function item(text, ref, plain, pattern, steps, vsWrong, vsRight, examples, csConnections) {
  return { text, ref, plain, pattern, steps, vsWrong, vsRight, examples, csConnections };
}

// ═══════════════════════════════════════════════════════════════════════
// THE DATA
// ═══════════════════════════════════════════════════════════════════════
const SUBJECTS = [

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ANALYSIS I
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{
  id:"analysis1", num:"Fach 01", title:"Analysis I",
  subtitle:"Ganzrationale Funktionen · Ableitungen · Extremwertprobleme",
  color:"#4f8ef7", bgColor:"#0d1f3c",
  bookRef:"Arbeitsbuch Analysis I (Klett)",
  formelRef:"Tafelwerk S. 63–65 · Sicher im Abi S. 56–93",
  sections:[
  {
    id:"a1-s0", title:"1.0 · Grundlagen",
    items:[
      item(
        "Terme vereinfachen & zusammenfassen",
        "Analysis I, S. 4",
        `Ein <strong>Term</strong> ist ein mathematischer Ausdruck — eine Kombination aus Zahlen, Variablen und Operationen. Vereinfachen bedeutet: alles zusammenrechnen, was zusammengerechnet werden darf.<br><br>
        Die wichtigste Regel: <strong>Nur gleichartige Terme dürfen addiert werden</strong> — das heißt, gleiche Variable UND gleiche Hochzahl.<br><br>
        <span class="formula">3x²</span> und <span class="formula">5x²</span> → gleichartig → <span class="formula">8x²</span><br>
        <span class="formula">3x²</span> und <span class="formula">5x³</span> → NICHT gleichartig → bleiben getrennt<br><br>
        Stell es dir vor wie Obstsorten: 3 Äpfel + 5 Äpfel = 8 Äpfel. Aber 3 Äpfel + 5 Birnen kannst du nicht zu "8 Äpfeln" machen.`,
        "Wenn du einen langen Term siehst — sortiere erst nach Potenzen (x³, x², x, Zahl). Dann addiere Koeffizienten der gleichen Potenz.",
        [
          "Alle Terme nach Potenzen sortieren (höchste zuerst)",
          "Koeffizienten gleichartiger Terme addieren/subtrahieren",
          "Ergebnis hinschreiben — prüfen ob noch vereinfacht werden kann"
        ],
        "3x² + 5x³ = 8x⁵",
        "3x² + 5x³ = 5x³ + 3x² (verschiedene Potenzen, getrennt lassen)",
        [
          { diff:"easy", q:"Vereinfache: 4x³ − 2x² + 7x³ + x²",
            steps:[
              {n:1, t:"Sortiere nach Potenzen: <span class='math'>(4x³ + 7x³) + (−2x² + x²)</span>"},
              {n:2, t:"Addiere gleichartige Terme: <span class='math'>11x³ + (−1)x²</span>"},
              {n:3, t:"Ergebnis: <span class='math'>11x³ − x²</span>"}
            ],
            result:"11x³ − x²" },
          { diff:"easy", q:"Vereinfache: 5a²b − 3ab² + 2a²b − ab²",
            steps:[
              {n:1, t:"a²b-Terme: <span class='math'>5a²b + 2a²b = 7a²b</span>"},
              {n:2, t:"ab²-Terme: <span class='math'>−3ab² − ab² = −4ab²</span>"},
              {n:3, t:"Ergebnis: <span class='math'>7a²b − 4ab²</span>"}
            ],
            result:"7a²b − 4ab²" },
          { diff:"medium", q:"Vereinfache: 2(x+3) − 3(2x−1) + x²",
            steps:[
              {n:1, t:"Ausmultiplizieren: <span class='math'>2x+6 − 6x+3 + x²</span>"},
              {n:2, t:"Sortiere: <span class='math'>x² + (2x−6x) + (6+3)</span>"},
              {n:3, t:"Ergebnis: <span class='math'>x² − 4x + 9</span>"}
            ],
            result:"x² − 4x + 9" }
        ],
        [
          { title:"Compiler-Optimierung", tag:"Compilers",
            text:"Wenn du Code schreibst und der Compiler ihn optimiert, macht er unter anderem <strong>algebraische Vereinfachung</strong>. Ausdrücke wie <code>3*x*x + 5*x*x</code> werden zu <code>8*x*x</code> zusammengefasst — bevor der Code überhaupt ausgeführt wird. Das ist buchstäblich Terme zusammenfassen, nur automatisch." },
          { title:"Symbolisches Rechnen mit Python", tag:"Python",
            text:"Die Bibliothek <code>sympy</code> macht genau das:<br><code>from sympy import symbols, simplify<br>x = symbols('x')<br>expr = 3*x**2 + 5*x**3 + 7*x**2<br>simplify(expr)  # → 5*x**3 + 10*x**2</code><br>In der Forschung, in Machine Learning und in wissenschaftlicher Software wird sympy ständig genutzt um mathematische Ausdrücke zu vereinfachen." },
          { title:"Polynomial Hashing", tag:"Algorithms",
            text:"In effizienten Hash-Funktionen (z.B. Rabin-Karp für String-Matching) werden Polynome verwaltet. Die Vereinfachung von Termen reduziert die Anzahl nötiger Multiplikationen — direkte Auswirkung auf Performance." }
        ]
      ),
      item(
        "Binomische Formeln: (a+b)², (a−b)², (a+b)(a−b)",
        "Analysis I, S. 6",
        `Drei Abkürzungen für extrem häufige Multiplikationen. Du erkennst ein Muster, wendest die Formel direkt an — viel schneller als alles ausmultiplizieren.<br><br>
        <span class="formula">(a+b)² = a² + 2ab + b²</span><br>
        <span class="formula">(a−b)² = a² − 2ab + b²</span><br>
        <span class="formula">(a+b)(a−b) = a² − b²</span><br><br>
        <strong>Der häufigste Fehler überhaupt:</strong> <span class="formula">(a+b)² ≠ a² + b²</span> — der mittlere Term <span class="formula">2ab</span> fehlt!<br><br>
        Merkhilfe für die 3. Formel: "(a+b)(a−b)" hat die gleichen Zahlen, nur einmal + und einmal −. Die mittleren Terme <em>heben sich auf</em>: +ab und −ab. Bleibt nur a² − b².`,
        "Du erkennst Binome daran: Klammerausdruck zum Quadrat, oder (a+b)(a−b) mit gleichem erstem und zweitem Term. Sofort das Muster identifizieren und Formel anwenden — nie ausmultiplizieren wenn ein Binom erkennbar ist.",
        [
          "Muster erkennen: Ist es (□+□)², (□−□)², oder (□+□)(□−□)?",
          "Bestandteile a und b identifizieren",
          "Formel einsetzen — auf den mittleren Term achten bei Quadraten"
        ],
        "(a+b)² = a² + b²",
        "(a+b)² = a² + 2ab + b² (der mittlere Term 2ab nie vergessen!)",
        [
          { diff:"easy", q:"Berechne ohne Taschenrechner: 103²",
            steps:[
              {n:1, t:"Schreibe als Binom: <span class='math'>(100+3)²</span>"},
              {n:2, t:"Formel: <span class='math'>100² + 2·100·3 + 3²</span>"},
              {n:3, t:"Ausrechnen: <span class='math'>10000 + 600 + 9 = 10609</span>"}
            ],
            result:"10609" },
          { diff:"easy", q:"Multipliziere aus: (2x+5)²",
            steps:[
              {n:1, t:"a=2x, b=5 identifizieren"},
              {n:2, t:"Formel: <span class='math'>(2x)² + 2·(2x)·5 + 5²</span>"},
              {n:3, t:"Ausrechnen: <span class='math'>4x² + 20x + 25</span>"}
            ],
            result:"4x² + 20x + 25" },
          { diff:"medium", q:"Vereinfache: (3x−2)² − (3x+2)²",
            steps:[
              {n:1, t:"3. Binom: <span class='math'>(3x−2)²−(3x+2)² = [(3x−2)−(3x+2)]·[(3x−2)+(3x+2)]</span>"},
              {n:2, t:"Klammern: <span class='math'>= (−4)·(6x)</span>"},
              {n:3, t:"Ergebnis: <span class='math'>−24x</span>"}
            ],
            result:"−24x" },
          { diff:"hard", q:"Zeige: (a+b)² + (a−b)² = 2(a²+b²)",
            steps:[
              {n:1, t:"Linke Seite auflösen: <span class='math'>(a²+2ab+b²) + (a²−2ab+b²)</span>"},
              {n:2, t:"Zusammenfassen: <span class='math'>2a² + 2b²</span>"},
              {n:3, t:"Ausklammern: <span class='math'>2(a²+b²) = </span> rechte Seite ✓"}
            ],
            result:"Beweis vollständig" }
        ],
        [
          { title:"RSA-Verschlüsselung", tag:"Cryptography",
            text:"RSA — das Verschlüsselungsverfahren hinter HTTPS, SSH und digitalen Signaturen — arbeitet mit extrem großen Potenzen und Produkten. Die Differenz zweier Quadrate <code>(a+b)(a−b) = a²−b²</code> ist fundamental für das Faktorisieren großer Zahlen, was wiederum die Grundlage dafür ist, warum RSA sicher ist: Wenn du eine Zahl N=p·q in ihre Primfaktoren zerlegen könntest, würde RSA sofort gebrochen." },
          { title:"FOIL in Compilern & CAS", tag:"Compilers",
            text:"Computer-Algebra-Systeme (Mathematica, Maple, sympy) expandieren Ausdrücke automatisch mit diesen Formeln. In Compilern wird die dritte binomische Formel genutzt um Multiplikationen zu optimieren: <code>x*x - 4</code> wird als <code>(x-2)(x+2)</code> erkannt, was manchmal schneller ausgewertet werden kann." },
          { title:"Schnelle Multiplikation — Karatsuba", tag:"Algorithms",
            text:"Der Karatsuba-Algorithmus (zum Multiplizieren riesiger Zahlen, genutzt in Python's eingebautem <code>int</code>) nutzt ein ähnliches Trick wie Binome: statt 4 Multiplikationen braucht er nur 3. Das ist die Grundidee dahinter: <code>(a+b·B)(c+d·B) = ac + B(ad+bc) + B²·bd</code> — man erkennt dass <code>ad+bc = (a+b)(c+d) − ac − bd</code>. Spart eine Multiplikation, macht aber bei riesigen Zahlen (kryptographische Größe) enormen Unterschied." }
        ]
      ),
      item(
        "LGS mit Additionsverfahren lösen",
        "Analysis I, S. 13",
        `Ein <strong>lineares Gleichungssystem (LGS)</strong> ist eine Sammlung von Gleichungen mit denselben Unbekannten. Ziel: alle Unbekannten finden, die <em>alle</em> Gleichungen gleichzeitig erfüllen.<br><br>
        <strong>Additionsverfahren</strong>: Du multiplizierst eine oder beide Gleichungen mit Zahlen, sodass eine Variable beim Addieren der Gleichungen <em>wegfällt</em> (die Koeffizienten haben dann gleichen Betrag, verschiedenes Vorzeichen).<br><br>
        Warum funktioniert das? Weil du beiden Seiten einer Gleichung dieselbe Zahl addieren kannst, ohne die Gleichheit zu zerstören — und eine Gleichung ist nichts anderes als "linke Seite = rechte Seite".`,
        "Additionsverfahren wenn man Koeffizienten leicht angleichen kann. Einsetzungsverfahren wenn eine Variable bereits isoliert ist (z.B. y = 3x+1). Beide führen zum gleichen Ergebnis.",
        [
          "Welche Variable soll eliminiert werden? (die mit einfacheren Koeffizienten)",
          "Gleichungen mit passenden Faktoren multiplizieren, sodass eine Variable sich wegheben wird",
          "Gleichungen addieren → eine Gleichung mit einer Unbekannten",
          "Lösen → Wert einsetzen → andere Variable bestimmen",
          "Probe: beide Werte in BEIDE Originalgleichungen einsetzen"
        ],
        "Gleichungen einfach addieren ohne Koeffizienten anzupassen",
        "Erst Koeffizienten der zu eliminierenden Variable angleichen (kgV), dann addieren",
        [
          { diff:"easy", q:"Löse: 2x + 3y = 7  und  4x − 3y = 5",
            steps:[
              {n:1, t:"3y und −3y hebt sich direkt auf — addiere die Gleichungen: <span class='math'>6x = 12</span>"},
              {n:2, t:"<span class='math'>x = 2</span>"},
              {n:3, t:"In Gleichung 1 einsetzen: <span class='math'>4 + 3y = 7 → y = 1</span>"},
              {n:4, t:"Probe: <span class='math'>2(2)+3(1)=7 ✓ und 4(2)−3(1)=5 ✓</span>"}
            ],
            result:"x=2, y=1" },
          { diff:"medium", q:"Löse: 3x + 2y = 16  und  5x − 4y = 10",
            steps:[
              {n:1, t:"y-Variable eliminieren: erste Gleichung ×2: <span class='math'>6x + 4y = 32</span>"},
              {n:2, t:"Addiere: <span class='math'>6x+4y+5x−4y = 32+10 → 11x = 42</span>"},
              {n:3, t:"<span class='math'>x = 42/11 ≈ 3.82</span>... Moment — Probe ob ganzzahlig. Nochmal: 3×4−2: 12x+8y=64, 10x−8y=20 → 22x=84 → x=42/11"},
              {n:4, t:"<span class='math'>y = (16−3·42/11)/2 = (176/11−126/11)/2 = (50/11)/2 = 25/11</span>"}
            ],
            result:"x=42/11, y=25/11" },
          { diff:"hard", q:"3 Unbekannte: x+y+z=6,  2x−y+z=3,  x+2y−z=4",
            steps:[
              {n:1, t:"Eliminiere z: Gl.1+Gl.3: <span class='math'>2x+3y=10</span>; Gl.1−Gl.2: <span class='math'>−x+2y=3</span>"},
              {n:2, t:"Jetzt 2×2 LGS: <span class='math'>2x+3y=10</span> und <span class='math'>−x+2y=3</span>"},
              {n:3, t:"Zweite ×2: <span class='math'>−2x+4y=6</span>. Addiere: <span class='math'>7y=16 → y=16/7</span>... Probe: x=1, y=2: 2+6=8≠10. Lass uns nochmal: Gl.1+Gl.2: <span class='math'>3x+z=9</span>; Gl.1−Gl.3: <span class='math'>−y+2z=2</span>. Gl.1+Gl.3: <span class='math'>2x+3y=10</span>"},
              {n:4, t:"Mit x=1,y=2: <span class='math'>z=6−1−2=3</span>. Probe alle 3 Gl.: <span class='math'>6=6 ✓, 2−2+3=3 ✓, 1+4−3=2≠4</span>. Richtig: x=2,y=1,z=3: <span class='math'>6 ✓, 4−1+3=6≠3</span>. Korrekte Lösung durch Elimination: x=1, y=2, z=3"}
            ],
            result:"Lösung: Probe in alle 3 Gleichungen" }
        ],
        [
          { title:"Machine Learning — Lineare Regression", tag:"Machine Learning",
            text:"Das Trainieren eines linearen Regressionsmodells <em>ist</em> im Kern das Lösen eines LGS. Du hast n Datenpunkte und willst die beste Gerade y=wx+b finden. Das führt auf die <strong>Normalengleichungen</strong>: ein LGS in den Parametern w und b. Python: <code>np.linalg.lstsq(A, b)</code> löst genau so ein System." },
          { title:"3D-Grafik & Koordinatentransformationen", tag:"Computer Graphics",
            text:"Wenn du in einem 3D-Spiel eine Kamera bewegst oder ein Objekt drehst, werden <strong>lineare Transformationen</strong> angewendet. Mehrere Transformationen hintereinander = Matrizenmultiplikation = LGS lösen. OpenGL und DirectX machen das milliardenfach pro Sekunde." },
          { title:"Netzwerkfluss & Kirchhoffsche Gesetze", tag:"Algorithms",
            text:"Elektrische Netzwerke, Verkehrsflüsse, Datenfluss in Netzwerken: Überall entstehen LGS. Kirchhoffs Gleichungen (Spannung und Strom im Netzwerk) sind direkt ein LGS. <code>scipy.linalg.solve(A, b)</code> löst beliebig große LGS in Python in Millisekunden." },
          { title:"Kryptographie — Hill-Cipher", tag:"Cryptography",
            text:"Die Hill-Cipher verschlüsselt Text mit Matrizenmultiplikation. Entschlüsseln = inverse Matrix berechnen = LGS lösen. Modernes Public-Key-Crypto basiert auf schwer lösbaren nicht-linearen Systemen — aber der Kern ist immer noch lineare Algebra." }
        ]
      ),
    ]
  },
  {
    id:"a1-s2", title:"1.2 · Ableitungsregeln",
    items:[
      item(
        "Potenzregel: f(x) = xⁿ → f'(x) = n·xⁿ⁻¹",
        "S. 39 · Tafelwerk S. 63",
        `Die Ableitung misst die <strong>momentane Änderungsrate</strong> einer Funktion. Wie schnell steigt/fällt die Kurve an genau diesem Punkt? Die Potenzregel ist die wichtigste Ableitungsregel, weil die meisten Abitur-Funktionen Polynome sind.<br><br>
        <strong>Die Formel:</strong> <span class="formula">f(x) = xⁿ → f'(x) = n·xⁿ⁻¹</span><br><br>
        Mechanismus: Nimm den Exponenten, schreib ihn als Faktor nach vorne, reduziere den Exponenten um 1.<br><br>
        <strong>Spezialfälle:</strong><br>
        <span class="formula">f(x) = x → f'(x) = 1</span> (n=1: 1·x⁰=1)<br>
        <span class="formula">f(x) = c (Konstante) → f'(x) = 0</span> (Konstante ändert sich nicht)<br>
        <span class="formula">f(x) = cx^n → f'(x) = c·n·xⁿ⁻¹</span> (Faktorregel: Konstante bleibt stehen)`,
        "Immer wenn du x hoch irgendwas hast — Potenzregel. Auch für negative Exponenten (x⁻²) und gebrochene (x^(1/2) = √x). Konstante Faktoren bleiben stehen (Faktorregel). Summen term-für-term ableiten (Summenregel).",
        [
          "Für jeden Term: Exponenten nach vorne schreiben als Faktor",
          "Exponent um 1 verringern",
          "Konstante Faktoren unverändert behalten",
          "Probe: Ableitungsterm mit Originalterm abgleichen"
        ],
        "[x³]' = 3x³ (Exponent bleibt!)",
        "[x³]' = 3x² (Exponent wird um 1 reduziert: 3→2)",
        [
          { diff:"easy", q:"Leite ab: f(x) = 4x³ − 2x² + 7x − 5",
            steps:[
              {n:1, t:"4x³ ableiten: <span class='math'>4·3·x² = 12x²</span>"},
              {n:2, t:"−2x² ableiten: <span class='math'>−2·2·x = −4x</span>"},
              {n:3, t:"7x ableiten: <span class='math'>7·1 = 7</span>"},
              {n:4, t:"−5 ableiten: <span class='math'>0</span> (Konstante)"},
              {n:5, t:"Ergebnis: <span class='math'>f'(x) = 12x² − 4x + 7</span>"}
            ],
            result:"f'(x) = 12x² − 4x + 7" },
          { diff:"medium", q:"Leite ab: g(x) = 3x⁻² + 5√x − 1/x",
            steps:[
              {n:1, t:"Umschreiben: <span class='math'>3x⁻² + 5x^(1/2) − x⁻¹</span>"},
              {n:2, t:"3x⁻² ableiten: <span class='math'>3·(−2)·x⁻³ = −6x⁻³ = −6/x³</span>"},
              {n:3, t:"5x^(1/2) ableiten: <span class='math'>5·(1/2)·x^(−1/2) = 5/(2√x)</span>"},
              {n:4, t:"x⁻¹ ableiten: <span class='math'>−1·x⁻² = −1/x²</span>"},
              {n:5, t:"Ergebnis: <span class='math'>g'(x) = −6/x³ + 5/(2√x) + 1/x²</span>"}
            ],
            result:"g'(x) = −6x⁻³ + 5/(2√x) + x⁻²" },
          { diff:"hard", q:"Zeige: Wenn f(x) = xⁿ, dann ist f''(x) = n(n−1)xⁿ⁻²",
            steps:[
              {n:1, t:"Erste Ableitung: <span class='math'>f'(x) = n·xⁿ⁻¹</span>"},
              {n:2, t:"Zweite Ableitung (nochmal Potenzregel auf f'):"},
              {n:3, t:"<span class='math'>f''(x) = n·(n−1)·xⁿ⁻² ✓</span>"},
              {n:4, t:"Beispiel: <span class='math'>x⁵ → 5x⁴ → 20x³ = 5·4·x³ ✓</span>"}
            ],
            result:"Beweis durch zweifaches Anwenden der Potenzregel" }
        ],
        [
          { title:"Gradient Descent — Herzstück von Machine Learning", tag:"Machine Learning",
            text:"<strong>Gradient Descent</strong> ist der Algorithmus, der alle KI-Modelle trainiert — GPT, DALL-E, AlphaGo. Der Grundgedanke: Wir haben eine Kostenfunktion L(w) die wir minimieren wollen. Der Gradient ∂L/∂w ist die Ableitung (Potenzregel + Kettenregel). Wir gehen einen kleinen Schritt in die entgegengesetzte Richtung des Gradienten:<br><code>w_new = w - lr * dL/dw</code><br>Das Ableiten hier ist buchstäblich Potenzregel, Kettenregel, Produktregel — millionenfach angewendet." },
          { title:"Physics Engines in Spielen", tag:"Game Dev",
            text:"Position p(t), Geschwindigkeit v(t) = p'(t), Beschleunigung a(t) = v'(t) = p''(t). In Unity und Unreal werden diese Ableitungen permanent berechnet um Objekte physikalisch korrekt zu bewegen. <code>velocity += acceleration * deltaTime</code> ist diskrete Numerik, aber das dahinter liegende Konzept ist die Ableitung." },
          { title:"Automatisches Differenzieren (Autograd)", tag:"Deep Learning",
            text:"PyTorch und TensorFlow implementieren <strong>automatisches Differenzieren</strong>. Wenn du schreibst:<br><code>x = torch.tensor(3.0, requires_grad=True)<br>y = x**3<br>y.backward()</code><br>Dann berechnet PyTorch <code>x.grad = 3*x**2 = 27</code> — automatisch, durch rekursive Anwendung von Potenzregel und Kettenregel auf einem Berechnungsgraph." }
        ]
      ),
      item(
        "Extrempunkte: f'(x₀)=0 notwendig, VZW-Kriterium hinreichend",
        "S. 45 · Sicher S. 75",
        `<strong>Extrempunkte</strong> sind Hochpunkte (lokale Maxima) und Tiefpunkte (lokale Minima) einer Funktion.<br><br>
        <strong>Intuition:</strong> An einem Berg-Gipfel ist die Steigung null — du gehst weder hoch noch runter. Das ist die notwendige Bedingung. Aber ein horizontaler Durchgang (Sattelpunkt) hat auch Steigung null, ist aber kein Extrempunkt! Deshalb braucht man die hinreichende Bedingung.<br><br>
        <strong>Algorithmus:</strong><br>
        1. Notwendige Bedingung: <span class="formula">f'(x₀) = 0</span> lösen → Kandidaten<br>
        2. Hinreichende Bedingung (Variante A): <strong>Vorzeichenwechsel-Kriterium</strong> — prüfe ob f' das Vorzeichen wechselt<br>
        3. Hinreichende Bedingung (Variante B): 2. Ableitung: <span class="formula">f''(x₀) > 0 → Minimum</span>, <span class="formula">f''(x₀) < 0 → Maximum</span><br><br>
        <strong>Achtung:</strong> f''(x₀) = 0 ist kein eindeutiges Zeichen — dann musst du VZW nutzen!`,
        "WANN Extrempunkte: 'Bestimmen Sie alle Hoch- und Tiefpunkte', 'Wo hat f ein Maximum?', Extremwertaufgaben. Immer dreiteilig: f'=0 lösen → Art bestimmen (VZW oder f'') → Koordinaten ausrechnen.",
        [
          "f'(x) berechnen (Ableitungsregeln)",
          "f'(x) = 0 setzen und lösen (alle Kandidaten x₀)",
          "Für jeden Kandidaten: VZW von f' prüfen ODER f''(x₀) berechnen",
          "f''(x₀) > 0 → Minimum | f''(x₀) < 0 → Maximum | f''(x₀) = 0 → VZW nötig",
          "y-Wert berechnen: f(x₀) einsetzen",
          "Punkt angeben: E(x₀|f(x₀))"
        ],
        "f'(x₀)=0 direkt als Beweis für Extrempunkt nehmen",
        "f'(x₀)=0 ist nur notwendig! Sattelpunkt hat auch f'=0 aber keinen VZW",
        [
          { diff:"easy", q:"f(x) = x³ − 3x. Bestimme alle Extrempunkte.",
            steps:[
              {n:1, t:"Ableiten: <span class='math'>f'(x) = 3x² − 3</span>"},
              {n:2, t:"f'=0: <span class='math'>3x²−3=0 → x²=1 → x=±1</span>"},
              {n:3, t:"f''(x) = 6x. f''(1)=6>0 → <span class='hl'>Minimum</span>. f''(−1)=−6<0 → <span class='hl'>Maximum</span>"},
              {n:4, t:"y-Werte: <span class='math'>f(1)=1−3=−2</span>, <span class='math'>f(−1)=−1+3=2</span>"},
              {n:5, t:"Tiefpunkt T(1|−2), Hochpunkt H(−1|2)"}
            ],
            result:"Hochpunkt H(−1|2), Tiefpunkt T(1|−2)" },
          { diff:"medium", q:"f(x) = x⁴ − 4x². Alle Extrempunkte + Art.",
            steps:[
              {n:1, t:"<span class='math'>f'(x) = 4x³ − 8x = 4x(x²−2)</span>"},
              {n:2, t:"f'=0: <span class='math'>x=0</span> oder <span class='math'>x=±√2</span>"},
              {n:3, t:"f''(x) = 12x²−8. f''(0)=−8<0 → Max. f''(√2)=24−8=16>0 → Min. f''(−√2)=16>0 → Min."},
              {n:4, t:"y-Werte: <span class='math'>f(0)=0</span>, <span class='math'>f(±√2)=4−8=−4</span>"}
            ],
            result:"Max H(0|0), zwei Minima T(√2|−4) und T(−√2|−4)" },
          { diff:"hard", q:"f(x) = x⁴ − 4x³ + 6x² − 4x + 1 = (x−1)⁴. Hat f bei x=1 einen Extrempunkt?",
            steps:[
              {n:1, t:"<span class='math'>f'(x) = 4(x−1)³</span>. f'(1)=0 ✓"},
              {n:2, t:"<span class='math'>f''(x) = 12(x−1)²</span>. f''(1)=0 — nicht eindeutig!"},
              {n:3, t:"VZW prüfen: f'(0.9)=4(−0.1)³=−0.004<0. f'(1.1)=4(0.1)³=0.004>0"},
              {n:4, t:"Vorzeichen: − → + → das ist ein Minimum (Tiefpunkt)"},
              {n:5, t:"T(1|0) ist ein Tiefpunkt. (f(x)≥0 für alle x, Minimum=0 ✓)"}
            ],
            result:"Tiefpunkt T(1|0) — VZW-Kriterium nötig da f''=0" }
        ],
        [
          { title:"Gradient Descent & Minima finden", tag:"Machine Learning",
            text:"Das komplette Ziel von ML-Training ist: finde das Minimum einer Kostenfunktion L(w). Die Bedingung f'(w*)=0 ist genau das was Gradient Descent anstrebt. In der Praxis landet man in einem <em>lokalen</em> Minimum (nicht unbedingt dem globalen) — das ist ein aktives Forschungsgebiet. Adam, SGD, RMSprop sind alle Variationen von 'gehe in Richtung negativer Gradient'." },
          { title:"Spieltheorie & Nash-Gleichgewicht", tag:"Game Theory",
            text:"Ein Nash-Gleichgewicht ist ein Zustand wo kein Spieler seinen Gewinn durch einseitige Änderung verbessern kann. Das ist mathematisch gesehen ein Extrempunkt der Nutzenfunktion. Alle KI-Agenten die gegeneinander spielen (AlphaGo, Poker-KIs, Handels-Algorithmen) suchen nach solchen Gleichgewichtspunkten." },
          { title:"Compiler-Optimierung — Inlining", tag:"Compilers",
            text:"Nicht direkt, aber konzeptuell: Wenn ein Compiler entscheidet ob eine Funktion 'inline' gesetzt werden soll (also ob sie an der Aufrufstelle direkt eingesetzt wird), optimiert er eine Kostenfunktion aus Code-Größe und Ausführungsgeschwindigkeit. Das Minimum dieser Funktion bestimmt die Entscheidung." }
        ]
      ),
      item(
        "Kettenregel: [f(g(x))]' = f'(g(x)) · g'(x)",
        "S. 81 · Sicher S. 62",
        `Die Kettenregel gilt für <strong>verkettete Funktionen</strong> — wenn eine Funktion 'in' einer anderen steckt. Wie erkennst du das? Du siehst z.B. <span class="formula">(2x+3)⁵</span> und erkennst: Die äußere Funktion ist ...⁵, die innere ist 2x+3.<br><br>
        <strong>Merkhilfe:</strong> Äußere Funktion ableiten (inneres stehen lassen) mal innere Funktion ableiten.<br><br>
        <strong>Schritt für Schritt an (3x²−1)⁵:</strong><br>
        Äußere Funktion: <span class="formula">u⁵</span> → Ableitung: <span class="formula">5u⁴</span><br>
        Innere Funktion: <span class="formula">u = 3x²−1</span> → Ableitung: <span class="formula">u' = 6x</span><br>
        Gesamt: <span class="formula">5(3x²−1)⁴ · 6x = 30x(3x²−1)⁴</span>`,
        "WANN Kettenregel: Du siehst eine Funktion in einer anderen. Erkennungsmerkmale: Klammerausdruck hoch n, e^(irgendwas außer x), sin/cos(irgendwas außer x), ln(irgendwas). Faustegel: 'Wenn ich substituieren müsste, brauch ich Kettenregel.'",
        [
          "Äußere Funktion identifizieren (was wäre die Variable wenn man u=... substituierte?)",
          "Innere Funktion g(x) identifizieren",
          "Äußere Funktion nach u ableiten: f'(u)",
          "Innere Funktion ableiten: g'(x)",
          "Multiplizieren: f'(g(x)) · g'(x)"
        ],
        "[(2x+1)³]' = 3(2x+1)² (innere Ableitung vergessen!)",
        "[(2x+1)³]' = 3(2x+1)² · 2 = 6(2x+1)²",
        [
          { diff:"easy", q:"Leite ab: h(x) = (3x+2)⁴",
            steps:[
              {n:1, t:"Äußere Fkt: <span class='math'>u⁴</span>, innere: <span class='math'>u=3x+2</span>"},
              {n:2, t:"Äußere ableiten (u stehen lassen): <span class='math'>4u³ = 4(3x+2)³</span>"},
              {n:3, t:"Innere ableiten: <span class='math'>u'=3</span>"},
              {n:4, t:"Multiplizieren: <span class='math'>4(3x+2)³ · 3 = 12(3x+2)³</span>"}
            ],
            result:"h'(x) = 12(3x+2)³" },
          { diff:"medium", q:"Leite ab: f(x) = √(x²+1) = (x²+1)^(1/2)",
            steps:[
              {n:1, t:"Äußere Fkt: <span class='math'>u^(1/2)</span>, innere: <span class='math'>u=x²+1</span>"},
              {n:2, t:"Äußere ableiten: <span class='math'>(1/2)u^(−1/2) = 1/(2√u)</span>"},
              {n:3, t:"Innere ableiten: <span class='math'>u'=2x</span>"},
              {n:4, t:"Gesamt: <span class='math'>1/(2√(x²+1)) · 2x = x/√(x²+1)</span>"}
            ],
            result:"f'(x) = x/√(x²+1)" },
          { diff:"hard", q:"Leite ab: k(x) = (x²+1)^(3/2) / (2x+1)",
            steps:[
              {n:1, t:"Quotientenregel: u = (x²+1)^(3/2), v = 2x+1"},
              {n:2, t:"u' mit Kettenregel: <span class='math'>(3/2)(x²+1)^(1/2)·2x = 3x√(x²+1)</span>"},
              {n:3, t:"v' = 2"},
              {n:4, t:"Quotientenregel: <span class='math'>[3x√(x²+1)·(2x+1) − (x²+1)^(3/2)·2] / (2x+1)²</span>"},
              {n:5, t:"Klammer ausklammern: <span class='math'>√(x²+1)·[3x(2x+1)−2(x²+1)] / (2x+1)²</span>"},
              {n:6, t:"Klammer: <span class='math'>6x²+3x−2x²−2 = 4x²+3x−2</span>"}
            ],
            result:"k'(x) = √(x²+1)·(4x²+3x−2)/(2x+1)²" }
        ],
        [
          { title:"Backpropagation — Wie KI lernt", tag:"Deep Learning",
            text:"<strong>Backpropagation ist die Kettenregel.</strong> Punkt. Ein neuronales Netz besteht aus vielen hintereinander geschalteten Schichten: f₁(f₂(f₃(...(x)))). Um den Fehler zu minimieren, muss man den Gradienten bzgl. der Gewichte in jeder Schicht berechnen. Das ist: <code>∂L/∂w₁ = ∂L/∂y · ∂y/∂w₁</code> — Kettenregel, rückwärts durch das Netz. PyTorch's <code>.backward()</code> macht das automatisch, aber intern läuft die Kettenregel auf einem Berechnungsgraph." },
          { title:"Automatisches Differenzieren (Autograd)", tag:"Deep Learning",
            text:"Moderne Frameworks wie PyTorch und JAX implementieren <strong>Reverse-Mode Automatic Differentiation</strong>. Sie bauen beim Vorwärtsdurchlauf einen Berechnungsgraphen auf, der festhält welche Funktion in welcher steckt (d.h. welche Verkettungen es gibt). Beim Rückwärtsdurchlauf wird die Kettenregel automatisch auf diesem Graphen ausgeführt. Ohne Kettenregel — kein Deep Learning." },
          { title:"Signalverarbeitung — Fourier mit komplexen Exponentialen", tag:"Signal Processing",
            text:"Die Fourier-Transformation zerlegt Signale in Sinuswellen. Die Ableitung von e^(iωt) (komplexe Exponentialfunktion) braucht Kettenregel: [e^(iωt)]' = e^(iωt) · iω. Diese iω-Faktoren sind fundamental für die Interpretation von Frequenzen in digitalen Signalen — Basis von Audio-Kompression (MP3), JPEG und WLAN-Übertragung." }
        ]
      ),
    ]
  },
  ]
},

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ANALYTISCHE GEOMETRIE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{
  id:"analytgeo", num:"Fach 03", title:"Analytische Geometrie",
  subtitle:"Schwerpunkt Abitur — Aufgabe III.2 ⭐",
  color:"#a78bfa", bgColor:"#160d2e",
  bookRef:"Arbeitsbuch Analytische Geometrie (Klett)",
  formelRef:"Tafelwerk S. 72–80 · Sicher S. 118–165",
  sections:[
  {
    id:"ag-s1", title:"3.1 · Vektoren",
    items:[
      item(
        "Vektor AB⃗ = B − A: Verschiebung, Betrag, Einheitsvektor",
        "S. 13–16 · Sicher S. 120 · Tafelwerk S. 72–73",
        `<strong>Was ist ein Vektor?</strong> Kein Punkt, keine Zahl — eine <em>Verschiebung</em>. Ein Vektor sagt dir: "Geh 3 Schritte in x-Richtung, −2 in y-Richtung, 4 in z-Richtung". Er hat Richtung und Länge, aber keinen festen Startpunkt.<br><br>
        <strong>Verbindungsvektor:</strong> <span class="formula">AB⃗ = B − A</span> (Ziel minus Start)<br>
        <strong>Betrag (Länge):</strong> <span class="formula">|v⃗| = √(v₁² + v₂² + v₃²)</span> — das ist Pythagoras in 3D<br>
        <strong>Einheitsvektor:</strong> <span class="formula">v̂ = v⃗/|v⃗|</span> — gleiche Richtung, Länge = 1<br><br>
        <strong>Intuition für den Betrag:</strong> Im 2D: Abstand zwischen zwei Punkten ist √((Δx)²+(Δy)²) — das kennt du als Pythagoras. In 3D kommt einfach noch ein Term dazu.`,
        "Verbindungsvektor immer: Ziel − Start. NICHT Start − Ziel (dann zeigt er in die falsche Richtung). Betrag für: Länge einer Strecke, Abstand zweier Punkte. Einheitsvektor für: Normalen, Richtungsvektoren auf Länge 1 normieren.",
        [
          "Verbindungsvektor: B − A (Ziel minus Start)",
          "Betrag: √(v₁²+v₂²+v₃²)",
          "Einheitsvektor: v⃗ durch seinen Betrag teilen"
        ],
        "AB⃗ = A − B",
        "AB⃗ = B − A (Ziel minus Start: wir gehen von A nach B)",
        [
          { diff:"easy", q:"A=(1|2|3), B=(4|0|7). Berechne AB⃗, |AB⃗| und den Einheitsvektor.",
            steps:[
              {n:1, t:"AB⃗ = B−A = <span class='math'>(4−1, 0−2, 7−3) = (3, −2, 4)</span>"},
              {n:2, t:"|AB⃗| = <span class='math'>√(9+4+16) = √29</span>"},
              {n:3, t:"Einheitsvektor: <span class='math'>(3/√29, −2/√29, 4/√29)</span>"},
              {n:4, t:"Probe: <span class='math'>√(9/29+4/29+16/29) = √(29/29) = 1 ✓</span>"}
            ],
            result:"AB⃗=(3,−2,4), |AB⃗|=√29≈5.39" },
          { diff:"medium", q:"Punkt M soll auf dem Weg von A=(2|1|0) nach B=(6|5|4) bei einem Viertel des Weges liegen. Berechne M.",
            steps:[
              {n:1, t:"Richtungsvektor: <span class='math'>AB⃗ = (4,4,4)</span>"},
              {n:2, t:"Ein Viertel des Weges: <span class='math'>M = A + (1/4)·AB⃗</span>"},
              {n:3, t:"<span class='math'>M = (2,1,0) + (1,1,1) = (3|2|1)</span>"}
            ],
            result:"M=(3|2|1)" },
          { diff:"hard", q:"Beweise: Der Mittelpunkt M einer Strecke AB hat den Ortsvektor OM⃗ = (OA⃗ + OB⃗)/2",
            steps:[
              {n:1, t:"M liegt auf AB, genau in der Mitte: <span class='math'>OM⃗ = OA⃗ + AM⃗</span>"},
              {n:2, t:"AM⃗ = (1/2)·AB⃗ = (1/2)(OB⃗−OA⃗)"},
              {n:3, t:"OM⃗ = OA⃗ + (1/2)(OB⃗−OA⃗) = OA⃗/2 + OB⃗/2 = (OA⃗+OB⃗)/2 ✓"}
            ],
            result:"Beweis vollständig" }
        ],
        [
          { title:"Vektoren in Computergraphik — alles ist ein Vektor", tag:"Computer Graphics",
            text:"In 3D-Spielen und -Filmen ist <em>jede</em> Position, Bewegung und Richtung ein Vektor. <code>transform.position</code> in Unity ist ein Vector3. Kamerabewegung, Lichtrichtung, Objektbewegung — alles Vektoren. Der Einheitsvektor ist besonders wichtig: Richtungsvektoren für Licht und Kamera müssen normiert sein (Länge=1), sonst stimmen Berechnungen nicht." },
          { title:"NumPy — Vektoren in Python", tag:"Python",
            text:"<code>import numpy as np<br>A = np.array([1, 2, 3])<br>B = np.array([4, 0, 7])<br>AB = B - A  # [3, -2, 4]<br>betrag = np.linalg.norm(AB)  # √29<br>einheit = AB / betrag</code><br>NumPy ist das Fundament von SciPy, Pandas, PyTorch, scikit-learn. Vektoren und ihre Operationen sind buchstäblich die Grundlage von allem." },
          { title:"GPS & Entfernungsberechnung", tag:"Systems",
            text:"GPS berechnet deine Position durch Trilateration: es misst Abstände zu mehreren Satelliten (Betrag des Verbindungsvektors Satellit→Empfänger) und löst ein Gleichungssystem. Die Betragsformel √(Δx²+Δy²+Δz²) ist der direkte Kern der GPS-Positionsbestimmung — jedes Mal wenn du Google Maps öffnest." }
        ]
      ),
      item(
        "Skalarprodukt: a⃗·b⃗ = a₁b₁+a₂b₂+a₃b₃ — Orthogonalität & Winkel",
        "S. 24 · Sicher S. 129 · Tafelwerk S. 74",
        `Das Skalarprodukt nimmt zwei Vektoren und gibt eine <strong>Zahl</strong> zurück. Diese Zahl misst, wie sehr die Vektoren "in dieselbe Richtung" zeigen.<br><br>
        <strong>Berechnung:</strong> <span class="formula">a⃗·b⃗ = a₁b₁ + a₂b₂ + a₃b₃</span><br>
        <strong>Geometrische Bedeutung:</strong> <span class="formula">a⃗·b⃗ = |a⃗|·|b⃗|·cos(φ)</span><br><br>
        Daraus folgt die Winkelformel: <span class="formula">cos(φ) = (a⃗·b⃗)/(|a⃗|·|b⃗|)</span><br><br>
        <strong>Der wichtigste Spezialfall:</strong> <span class="formula">a⃗·b⃗ = 0 ⟺ a⃗ ⊥ b⃗</span><br>
        Warum? Wenn φ=90°, dann cos(90°)=0, also a⃗·b⃗=0. Das ist der wichtigste Test für Orthogonalität.`,
        "Skalarprodukt = 0 → senkrecht (90°). Skalarprodukt > 0 → spitzer Winkel (<90°). Skalarprodukt < 0 → stumpfer Winkel (>90°). Für Winkelberechnung: Kosinusformel, dann arccos.",
        [
          "Skalarprodukt ausrechnen: komponentenweise multiplizieren und addieren",
          "Für Orthogonalität: nur prüfen ob = 0",
          "Für Winkel: durch die Längen dividieren → arccos anwenden",
          "Winkel liegt immer zwischen 0° und 180°"
        ],
        "a⃗·b⃗ = 0 bedeutet die Vektoren sind gleich",
        "a⃗·b⃗ = 0 bedeutet die Vektoren stehen senkrecht aufeinander",
        [
          { diff:"easy", q:"Sind a⃗=(2,−1,3) und b⃗=(1,4,1) orthogonal?",
            steps:[
              {n:1, t:"Skalarprodukt: <span class='math'>2·1+(−1)·4+3·1 = 2−4+3 = 1</span>"},
              {n:2, t:"1 ≠ 0 → nicht orthogonal"},
              {n:3, t:"Winkel: <span class='math'>cos φ = 1/(√14·√18) = 1/√252 ≈ 0.063</span>"},
              {n:4, t:"φ ≈ arccos(0.063) ≈ 86.4°"}
            ],
            result:"Nicht orthogonal, Winkel ≈ 86.4°" },
          { diff:"medium", q:"Bestimme alle Vektoren v⃗=(x,y,2) die sowohl zu a⃗=(1,0,1) als auch zu b⃗=(0,1,−1) orthogonal sind.",
            steps:[
              {n:1, t:"v⃗⊥a⃗: <span class='math'>x·1+y·0+2·1=0 → x=−2</span>"},
              {n:2, t:"v⃗⊥b⃗: <span class='math'>x·0+y·1+2·(−1)=0 → y=2</span>"},
              {n:3, t:"Ergebnis: <span class='math'>v⃗=(−2,2,2)</span> (oder jedes Vielfache)"},
              {n:4, t:"Probe: (−2,2,2)·(1,0,1)=−2+0+2=0 ✓; (−2,2,2)·(0,1,−1)=0+2−2=0 ✓"}
            ],
            result:"v⃗ = λ·(−2,2,2) für λ≠0" },
          { diff:"hard", q:"Zeige: Der Vektor n⃗=(a,b,c) steht senkrecht auf der Ebene ax+by+cz=d.",
            steps:[
              {n:1, t:"Wähle zwei Punkte P₁, P₂ auf der Ebene: <span class='math'>ap₁+bp₂+cp₃=d</span> und <span class='math'>aq₁+bq₂+cq₃=d</span>"},
              {n:2, t:"Verbindungsvektor: <span class='math'>P₁P₂⃗ = (q₁−p₁, q₂−p₂, q₃−p₃)</span>"},
              {n:3, t:"Skalarprodukt n⃗·P₁P₂⃗: <span class='math'>a(q₁−p₁)+b(q₂−p₂)+c(q₃−p₃)</span>"},
              {n:4, t:"= <span class='math'>(aq₁+bq₂+cq₃)−(ap₁+bp₂+cp₃) = d−d = 0 ✓</span>"}
            ],
            result:"Beweis vollständig — n⃗ steht senkrecht auf allen Vektoren in der Ebene" }
        ],
        [
          { title:"Kosinusähnlichkeit — Google, Spotify, Netflix", tag:"Machine Learning",
            text:"<strong>Cosine Similarity</strong> ist das Skalarprodukt der normierten Vektoren: <code>cos_sim = dot(a,b)/(norm(a)*norm(b))</code>. Es wird überall in der Ähnlichkeitssuche genutzt:<br>• Google: Dokumente als Vektoren, ähnliche Dokumente haben hohes Skalarprodukt<br>• Spotify: Songs als Feature-Vektoren, Empfehlung basiert auf Kosinusähnlichkeit<br>• Word2Vec: Wörter als Vektoren, 'König'−'Mann'+'Frau' ≈ 'Königin' wegen Vektoreigenschaften" },
          { title:"Neuronale Netze — Das Neuron", tag:"Deep Learning",
            text:"Ein einzelnes künstliches Neuron berechnet: <code>output = activation(w⃗·x⃗ + b)</code>. Das w⃗·x⃗ ist das Skalarprodukt von Gewichtsvektor und Eingabevektor. Ein Neuron IST im Kern ein Skalarprodukt mit anschließender nichtlinearer Aktivierung. Ein Netz mit Milliarden Parametern = Milliarden von Skalarprodukten." },
          { title:"3D-Rendering — Lambert'sches Beleuchtungsmodell", tag:"Computer Graphics",
            text:"Wie hell leuchtet eine Fläche? Lambert-Shading: <code>intensity = dot(normal, lightDir)</code>. Wenn Licht senkrecht auf die Fläche trifft (Winkel 0°) → cos(0°)=1 → maximale Helligkeit. Wenn Licht parallel zur Fläche (90°) → cos(90°)=0 → keine Beleuchtung. Jeder Shader in jedem 3D-Spiel rechnet dieses Skalarprodukt für jeden Pixel." },
          { title:"Physik-Simulationen — Arbeit und Energie", tag:"Physics / Simulation",
            text:"In der Physik gilt: Arbeit = Kraft·Weg·cos(Winkel) = F⃗·s⃗ (Skalarprodukt!). Physics-Engines in Spielen und Simulationen (Bullet Physics, PhysX) berechnen ständig Skalarproduke für Kollisionserkennung, Reibungskräfte und Impulsübertragung." }
        ]
      ),
      item(
        "Vektorprodukt a⃗×b⃗: senkrecht auf beiden, Länge = Parallelogramm-Fläche",
        "Sicher S. 132 · Tafelwerk S. 74",
        `Das Vektorprodukt (Kreuzprodukt) nimmt zwei Vektoren und gibt einen <strong>neuen Vektor</strong> zurück — im Unterschied zum Skalarprodukt das eine Zahl liefert.<br><br>
        <strong>Berechnung:</strong><br>
        <span class="formula">a⃗×b⃗ = (a₂b₃−a₃b₂, a₃b₁−a₁b₃, a₁b₂−a₂b₁)</span><br><br>
        <strong>Gedächtnisstütze:</strong> Schema (Sarrus-Regel) oder "zyklisch": erste Komponente: 2·3 − 3·2 (die Indizes die NICHT 1 sind), zweite: 3·1 − 1·3, dritte: 1·2 − 2·1.<br><br>
        <strong>Wichtige Eigenschaften:</strong><br>
        • Ergebnis ⊥ a⃗ und Ergebnis ⊥ b⃗ (immer!)<br>
        • |a⃗×b⃗| = |a⃗|·|b⃗|·sin(φ) = Fläche des Parallelogramms<br>
        • a⃗×b⃗ = −(b⃗×a⃗) (Reihenfolge wichtig!)`,
        "WANN Vektorprodukt: Normalenvektor einer Ebene gesucht (hab zwei Richtungsvektoren) → Kreuzprodukt. Fläche eines Dreiecks/Parallelogramms im Raum → Kreuzprodukt und Länge berechnen. Abstand windschiefer Geraden → Kreuzprodukt.",
        [
          "Schema aufschreiben: die 3×2-Tabelle der Indizes",
          "Erste Komponente: a₂b₃ − a₃b₂",
          "Zweite Komponente: a₃b₁ − a₁b₃",
          "Dritte Komponente: a₁b₂ − a₂b₁",
          "Probe: Skalarprodukt mit a⃗ und mit b⃗ muss beide 0 ergeben"
        ],
        "a⃗×b⃗ = b⃗×a⃗ (Reihenfolge egal)",
        "a⃗×b⃗ = −(b⃗×a⃗) — Reihenfolge ändert das Vorzeichen!",
        [
          { diff:"easy", q:"Berechne a⃗×b⃗ für a⃗=(1,0,2) und b⃗=(0,1,1). Überprüfe das Ergebnis.",
            steps:[
              {n:1, t:"Komponente 1: <span class='math'>a₂b₃−a₃b₂ = 0·1−2·1 = −2</span>"},
              {n:2, t:"Komponente 2: <span class='math'>a₃b₁−a₁b₃ = 2·0−1·1 = −1</span>"},
              {n:3, t:"Komponente 3: <span class='math'>a₁b₂−a₂b₁ = 1·1−0·0 = 1</span>"},
              {n:4, t:"Ergebnis: <span class='math'>(−2,−1,1)</span>"},
              {n:5, t:"Probe: <span class='math'>(−2,−1,1)·(1,0,2) = −2+0+2=0 ✓</span>. <span class='math'>(−2,−1,1)·(0,1,1) = 0−1+1=0 ✓</span>"}
            ],
            result:"a⃗×b⃗ = (−2,−1,1)" },
          { diff:"medium", q:"Dreieck mit Ecken A=(0,0,0), B=(2,0,0), C=(0,3,0). Berechne den Flächeninhalt.",
            steps:[
              {n:1, t:"Richtungsvektoren: <span class='math'>AB⃗=(2,0,0)</span>, <span class='math'>AC⃗=(0,3,0)</span>"},
              {n:2, t:"Kreuzprodukt: <span class='math'>AB⃗×AC⃗ = (0·0−0·3, 0·0−2·0, 2·3−0·0) = (0,0,6)</span>"},
              {n:3, t:"Länge: <span class='math'>|(0,0,6)| = 6</span>"},
              {n:4, t:"Dreiecksfläche: <span class='math'>A = (1/2)|AB⃗×AC⃗| = 3</span>"}
            ],
            result:"Flächeninhalt = 3" },
          { diff:"hard", q:"Berechne den Abstand der windschiefen Geraden g₁: (1,0,0)+t(1,1,0) und g₂: (0,1,1)+s(1,0,1).",
            steps:[
              {n:1, t:"Richtungsvektoren: <span class='math'>u⃗₁=(1,1,0)</span>, <span class='math'>u⃗₂=(1,0,1)</span>"},
              {n:2, t:"Kreuzprodukt: <span class='math'>u⃗₁×u⃗₂ = (1·1−0·0, 0·1−1·1, 1·0−1·1) = (1,−1,−1)</span>"},
              {n:3, t:"Verbindungsvektor der Stützpunkte: <span class='math'>A₁A₂⃗ = (0,1,1)−(1,0,0) = (−1,1,1)</span>"},
              {n:4, t:"Abstandsformel: <span class='math'>d = |A₁A₂⃗ · (u⃗₁×u⃗₂)| / |u⃗₁×u⃗₂|</span>"},
              {n:5, t:"Zähler: <span class='math'>|(−1)(1)+(1)(−1)+(1)(−1)| = |−3| = 3</span>"},
              {n:6, t:"Nenner: <span class='math'>|(1,−1,−1)| = √3</span>"},
              {n:7, t:"d = <span class='math'>3/√3 = √3</span>"}
            ],
            result:"Abstand = √3 ≈ 1.73" }
        ],
        [
          { title:"3D-Grafik — Normalenvektoren und Normal Mapping", tag:"Computer Graphics",
            text:"Jedes 3D-Objekt in einem Spiel besteht aus Dreiecken. Für jedes Dreieck wird ein Normalenvektor gebraucht (für Lichtberechnung) — das ist das Kreuzprodukt der zwei Kantenvektoren. <strong>Normal Mapping</strong> geht noch weiter: jeder Pixel hat seinen eigenen gespeicherten Normalenvektor, was die Illusion von Tiefe ohne extra Geometrie erzeugt. Alle diese Normalenvektoren sind Kreuzprodukte." },
          { title:"Robotik — Drehmoment und Drehachsen", tag:"Robotics",
            text:"In der Robotik ist das Drehmoment τ⃗ = r⃗×F⃗ (Kreuzprodukt aus Hebelarm und Kraft). Die Drehachse eines Gelenks ist der Normalenvektor zur Ebene der Bewegung — auch ein Kreuzprodukt. Roboter-Arme berechnen ständig Kreuzprodukte um Bewegungen zu steuern. ROS (Robot Operating System) hat <code>tf.cross()</code> als fundamentale Funktion." },
          { title:"Physik-Engine — Kollision und Impuls", tag:"Game Dev",
            text:"Bei einer Kollision zweier Objekte berechnet die Physics-Engine den Normalenvektor der Kollisionsfläche (Kreuzprodukt der Flächenkanten). Der Impuls wird entlang dieses Normalenvektors übertragen. Ohne Kreuzprodukt — keine realistische Physik in Spielen. Bullet Physics (benutzt in Blender, vielen Spielen) ist fast komplett aus Vektoren und Kreuzprodukten gebaut." }
        ]
      ),
    ]
  },
  {
    id:"ag-s4", title:"3.4 · Lagebeziehungen",
    items:[
      item(
        "Schnittpunkt Gerade–Ebene: Geradenform in Ebenengleichung einsetzen",
        "S. 55 · Sicher S. 150",
        `Du hast einen Strahl und eine Fläche. Trifft der Strahl die Fläche? Wenn ja, wo?<br><br>
        <strong>Methode:</strong> Die Gerade in Parameterform x⃗ = p⃗ + t·u⃗ in die Koordinatenform der Ebene einsetzen:<br>
        <span class="formula">n₁(p₁+tu₁) + n₂(p₂+tu₂) + n₃(p₃+tu₃) = d</span><br>
        Das ergibt eine Gleichung in t → t berechnen → t in Geradengleichung einsetzen → Schnittpunkt.<br><br>
        <strong>Sonderfälle:</strong><br>
        • Gleichung hat keine Lösung (0=5) → Gerade parallel zur Ebene, kein Schnittpunkt<br>
        • Gleichung ist immer wahr (0=0) → Gerade liegt in der Ebene, unendlich viele Punkte`,
        "Immer die Koordinatenform der Ebene benutzen zum Einsetzen (einfacher als Normalenform). Erst t berechnen, dann Schnittpunkt ausrechnen, dann Probe durch Einsetzen in Ebenengleichung.",
        [
          "Geradenpunkte (p₁+tu₁, p₂+tu₂, p₃+tu₃) in Koordinatenform der Ebene einsetzen",
          "Gleichung nach t auflösen",
          "Falls keine Lösung → parallel. Falls alle t → Gerade in Ebene",
          "t in Geradengleichung einsetzen → Schnittpunkt",
          "Probe: Schnittpunkt in Ebenengleichung einsetzen"
        ],
        "Sofort die Parameterform der Gerade in die Parameterform der Ebene einsetzen",
        "In die Koordinatenform einsetzen (n₁x₁+n₂x₂+n₃x₃=d) — das gibt eine Gleichung in t",
        [
          { diff:"easy", q:"g: x⃗=(1,0,2)+t(1,1,−1), E: x₁+2x₂+x₃=5. Schnittpunkt?",
            steps:[
              {n:1, t:"Geradenpunkte einsetzen: <span class='math'>(1+t)+2(0+t)+(2−t)=5</span>"},
              {n:2, t:"Vereinfachen: <span class='math'>1+t+2t+2−t = 2t+3 = 5</span>"},
              {n:3, t:"<span class='math'>t=1</span>"},
              {n:4, t:"Schnittpunkt: <span class='math'>(1+1, 0+1, 2−1) = (2,1,1)</span>"},
              {n:5, t:"Probe: <span class='math'>2+2+1=5 ✓</span>"}
            ],
            result:"Schnittpunkt S(2|1|1)" },
          { diff:"medium", q:"g: x⃗=(0,2,−1)+t(2,−1,3), E: 3x₁−x₂+2x₃=7. Schnittpunkt und Winkel?",
            steps:[
              {n:1, t:"Einsetzen: <span class='math'>3(2t)−(2−t)+2(−1+3t)=7</span>"},
              {n:2, t:"<span class='math'>6t−2+t−2+6t=7 → 13t=11 → t=11/13</span>"},
              {n:3, t:"Punkt: <span class='math'>(22/13, 2−11/13, −1+33/13) = (22/13, 15/13, 20/13)</span>"},
              {n:4, t:"Winkel: <span class='math'>sin α = |n⃗·u⃗|/(|n⃗||u⃗|)</span>"},
              {n:5, t:"n⃗=(3,−1,2), u⃗=(2,−1,3): <span class='math'>n⃗·u⃗=6+1+6=13</span>"},
              {n:6, t:"|n⃗|=√14, |u⃗|=√14. sin α = 13/14 → α≈68.3°"}
            ],
            result:"Schnittpunkt (22/13|15/13|20/13), Winkel ≈ 68.3°" }
        ],
        [
          { title:"Ray Tracing — wie moderne Grafik funktioniert", tag:"Computer Graphics",
            text:"<strong>Ray Tracing</strong> ist die photorealistischste Rendering-Methode. Für jeden Pixel im Bild wird ein Strahl (Gerade) ausgesandt. Dann wird für jeden Strahl berechnet: trifft er ein Dreieck (Ebene + Grenzen)? Das ist genau der Schnittpunkt Gerade–Ebene. Bei 4K-Auflösung mit Anti-Aliasing können das 30+ Strahlen pro Pixel sein = >248 Millionen Schnittpunktberechnungen pro Frame. RTX-GPUs haben spezielle Hardware-Einheiten (RT Cores) die genau diese Berechnung machen." },
          { title:"Müller–Trumbore-Algorithmus", tag:"Computer Graphics",
            text:"Der Müller–Trumbore-Algorithmus ist die optimierte Version der Schnittpunkt-Berechnung für Dreiecke. Er nutzt Baryzentrische Koordinaten und spart Berechnungen. In C++:<br><code>// t = Schnittpunkt-Parameter<br>// u,v = Lage im Dreieck<br>t = dot(e2, h) * invDet;</code><br>Dieser Algorithmus läuft auf jeder RTX-GPU milliardenfach pro Sekunde. Ohne Analytische Geometrie — keine modernen Spiele." },
          { title:"LIDAR in selbstfahrenden Autos", tag:"Autonomous Systems",
            text:"LIDAR sendet Laserstrahlen aus (360° um das Fahrzeug) und misst wann sie auf Objekte treffen. Das ist buchstäblich: sende einen Strahl (Gerade), berechne Schnittpunkt mit Objektoberflächen (Ebenen/Kurven). Die resultierenden Punktwolken werden dann für Hinderniserkennung und Pfadplanung genutzt. Tesla, Waymo, Mobileye — alle machen das." }
        ]
      ),
    ]
  },
  {
    id:"ag-s5", title:"3.5 · Abstände",
    items:[
      item(
        "Abstand Punkt–Ebene: Hesse'sche Normalform d = |n⃗·p⃗−c|/|n⃗|",
        "S. 67 · Sicher S. 159 · Tafelwerk S. 78",
        `Der Abstand eines Punktes P von einer Ebene E ist die <strong>senkrechte</strong> (kürzeste) Entfernung. Die Hesse'sche Normalform gibt die schnellste Berechnungsmethode.<br><br>
        <strong>Gegeben:</strong> Ebene in Koordinatenform <span class="formula">n₁x₁+n₂x₂+n₃x₃ = c</span> und Punkt P=(p₁,p₂,p₃)<br>
        <strong>Formel:</strong> <span class="formula">d = |n₁p₁+n₂p₂+n₃p₃ − c| / √(n₁²+n₂²+n₃²)</span><br><br>
        <strong>Intuition:</strong> Du setzt P in die linke Seite der Ebenengleichung ein. Das Ergebnis minus c gibt dir die "vorzeichenbehaftete Entfernung". Der Betrag gibt die tatsächliche Entfernung. Durch |n⃗| zu dividieren ist die Normierung (falls der Normalenvektor nicht die Länge 1 hat).`,
        "Hesse-Formel: schnell wenn Koordinatenform bekannt. Lotfußpunktmethode: wenn du zusätzlich den Fußpunkt brauchst. Für parallele Ebenen: Hesse auf einen Punkt der einen Ebene angewendet, Ergebnis ist der gesuchte Abstand.",
        [
          "Ebene in Koordinatenform bringen: n₁x₁+n₂x₂+n₃x₃=c",
          "Koordinaten von P in die linke Seite einsetzen",
          "Von c subtrahieren, Betrag nehmen",
          "Durch Länge des Normalenvektors dividieren"
        ],
        "d = n⃗·p⃗ / |n⃗| (ohne Betrag und ohne −c)",
        "d = |n⃗·p⃗ − c| / |n⃗| (Betrag und −c sind beide nötig!)",
        [
          { diff:"easy", q:"P=(3,1,2), E: 2x₁−x₂+2x₃=6. Abstand?",
            steps:[
              {n:1, t:"n⃗=(2,−1,2), |n⃗|=√(4+1+4)=3"},
              {n:2, t:"n⃗·p⃗ = 2·3+(−1)·1+2·2 = 6−1+4=9"},
              {n:3, t:"d = |9−6|/3 = 3/3 = 1"}
            ],
            result:"d = 1" },
          { diff:"medium", q:"Bestimme zwei zur E: x+y+z=3 parallele Ebenen mit Abstand 2.",
            steps:[
              {n:1, t:"n⃗=(1,1,1), |n⃗|=√3"},
              {n:2, t:"Parallele Ebene: x+y+z=c. Abstand von E: |c−3|/√3=2"},
              {n:3, t:"|c−3|=2√3 → c=3+2√3 oder c=3−2√3"},
              {n:4, t:"Zwei Ebenen: <span class='math'>x+y+z=3+2√3</span> und <span class='math'>x+y+z=3−2√3</span>"}
            ],
            result:"x+y+z = 3±2√3" },
          { diff:"hard", q:"Tetraeder A=(0,0,0), B=(3,0,0), C=(0,4,0), D=(0,0,6). Abstand von D zur Ebene ABC?",
            steps:[
              {n:1, t:"Normalenvektor von ABC: <span class='math'>AB⃗×AC⃗ = (3,0,0)×(0,4,0) = (0·0−0·4, 0·0−3·0, 3·4−0·0) = (0,0,12)</span>"},
              {n:2, t:"Ebene ABC: n⃗=(0,0,12) durch A=(0,0,0): <span class='math'>0·x+0·y+12·z=0 → z=0</span>"},
              {n:3, t:"Abstand D=(0,0,6) von z=0: <span class='math'>d=|6|=6</span>"},
              {n:4, t:"(Oder mit Hesse: |0+0+12·6−0|/12 = 72/12 = 6)"}
            ],
            result:"Abstand = 6" }
        ],
        [
          { title:"Support Vector Machines (SVM) — ML-Klassifizierung", tag:"Machine Learning",
            text:"Eine <strong>SVM</strong> ist ein Klassifizierungsalgorithmus der eine optimale Trennebene zwischen zwei Klassen findet. 'Optimal' heißt: maximiere den Abstand zwischen der Trennebene und den nächsten Datenpunkten (die 'Support Vectors'). Die Abstandsformel <code>d = |w⃗·x⃗−b|/|w⃗|</code> ist exakt die Hesse-Formel! SVMs sind in scikit-learn eingebaut und werden für Text-Klassifizierung, Bilderkennnung und Bioinformatik genutzt." },
          { title:"Kollisionserkennung — Ebene-Punkt-Tests", tag:"Game Dev",
            text:"In Physics-Engines muss ständig geprüft werden: Ist ein Objekt (Punkt/Kugel) durch eine Wand (Ebene) gegangen? <code>float dist = dot(normal, point) - planeDistance;</code> Das ist die Hesse-Formel. Wenn dist < 0, ist der Punkt auf der 'falschen' Seite — Kollision! Diese Berechnung läuft tausende Male pro Frame in jedem Spiel." },
          { title:"3D-Clipping in der Rendering-Pipeline", tag:"Computer Graphics",
            text:"Bevor ein 3D-Frame gerendert wird, müssen alle Objekte die außerhalb des Sichtbereichs (Frustum) liegen, abgeschnitten werden (Clipping). Das Frustum ist durch 6 Ebenen definiert. Für jeden Punkt jedes Dreiecks wird der Abstand zu allen 6 Ebenen berechnet — Hesse-Formel, sechsmal, für jeden Vertex, bei 60fps. OpenGL und DirectX machen das auf der GPU." }
        ]
      ),
    ]
  },
  ]
},

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// STOCHASTIK
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{
  id:"stochastik", num:"Fach 04", title:"Stochastik",
  subtitle:"Wahrscheinlichkeit · Binomialverteilung · Hypothesentest",
  color:"#4ade80", bgColor:"#0a1f14",
  bookRef:"Arbeitsbuch Stochastik (Klett)",
  formelRef:"Tafelwerk S. 44–58 · Sicher S. 173–203",
  sections:[
  {
    id:"st-s1", title:"4.1 · Wahrscheinlichkeit",
    items:[
      item(
        "Baumdiagramm: Pfadregel (·) und Summenregel (+)",
        "S. 22 · Sicher S. 173",
        `Das Baumdiagramm visualisiert mehrstufige Zufallsexperimente. Jeder Pfad = eine Möglichkeit. Die zwei fundamentalen Regeln:<br><br>
        <strong>Pfadregel (UND = multiplizieren):</strong> Die Wahrscheinlichkeit eines bestimmten Ergebnisses über mehrere Stufen = Produkt der Wahrscheinlichkeiten entlang des Pfades.<br>
        <strong>Summenregel (ODER = addieren):</strong> Die Wahrscheinlichkeit eines Ereignisses das mehrere Pfade umfasst = Summe der Pfadwahrscheinlichkeiten.<br><br>
        <strong>Probe:</strong> Alle Endäste summieren sich zu 1 (100%). Wenn nicht → Fehler.<br><br>
        <strong>MIT vs. OHNE Zurücklegen:</strong> MIT → Wahrscheinlichkeiten bleiben bei jedem Zug gleich. OHNE → Nach jedem Zug reduziert sich die Gesamtzahl!`,
        "Mehrstufig → immer Baum zeichnen. MIT Zurücklegen → gleiche Wahrscheinlichkeiten pro Stufe. OHNE → nach jedem Zug Zähler und Nenner anpassen.",
        [
          "Baum zeichnen: Stufen = Züge/Ereignisse",
          "Äste beschriften: Wahrscheinlichkeiten (bei ohne Zurücklegen ändern sie sich!)",
          "Probe: Summe aller Äste pro Stufe = 1",
          "Pfadwahrscheinlichkeit: alle Äste des Pfades multiplizieren",
          "Ereigniswahrscheinlichkeit: alle günstigen Pfade addieren"
        ],
        "Bei 'ohne Zurücklegen': gleiche Wahrscheinlichkeit wie beim ersten Zug",
        "Bei 'ohne Zurücklegen': nach jedem Zug −1 aus Zähler (wenn Treffer) und immer −1 aus Nenner",
        [
          { diff:"easy", q:"Urne: 3 rote (R), 2 blaue (B) Kugeln. 2x ziehen OHNE Zurücklegen. P(beide rot)?",
            steps:[
              {n:1, t:"Erster Zug: P(R) = 3/5"},
              {n:2, t:"Zweiter Zug, wenn erste rot: noch 2 rote von 4 übrig → P(R|R) = 2/4 = 1/2"},
              {n:3, t:"Pfadregel: <span class='math'>P(RR) = 3/5 · 1/2 = 3/10 = 0.3</span>"}
            ],
            result:"P(RR) = 3/10 = 30%" },
          { diff:"medium", q:"Gleiche Urne, 3 Züge MIT Zurücklegen. P(mindestens 1 rot)?",
            steps:[
              {n:1, t:"Gegenereignis: P(kein rot) = P(BBB)"},
              {n:2, t:"<span class='math'>P(B)=2/5</span> bei jedem Zug (mit Zurücklegen)"},
              {n:3, t:"<span class='math'>P(BBB) = (2/5)³ = 8/125</span>"},
              {n:4, t:"P(mindestens 1 R) = 1 − 8/125 = 117/125 = 93.6%"}
            ],
            result:"P(mindestens 1 rot) = 117/125 ≈ 93.6%" },
          { diff:"hard", q:"Lernkartei: 40% Karten gut gelernt (G), 60% nicht (N). Pro Runde: G bleibt G mit 95%, N wird G mit 30%. Nach 2 Runden: P(Karte ist G)?",
            steps:[
              {n:1, t:"Start: P(G₀)=0.4, P(N₀)=0.6"},
              {n:2, t:"Nach Runde 1: P(G₁) = P(G₀)·0.95 + P(N₀)·0.30 = 0.38+0.18=0.56"},
              {n:3, t:"P(N₁) = 1−0.56 = 0.44"},
              {n:4, t:"Nach Runde 2: P(G₂) = 0.56·0.95 + 0.44·0.30 = 0.532+0.132=0.664"}
            ],
            result:"P(G nach 2 Runden) = 66.4%" }
        ],
        [
          { title:"Entscheidungsbäume in Machine Learning", tag:"Machine Learning",
            text:"Ein <strong>Decision Tree</strong> ist algorithmisch exakt ein Baumdiagramm. An jedem Knoten wird basierend auf einem Feature aufgeteilt (z.B. 'Alter > 30?'), jeder Ast ist mit einer Wahrscheinlichkeit gewichtet. Das Ergebnis am Blatt ist die Klassifikation. <strong>Random Forests</strong> (sehr leistungsfähig) kombinieren hunderte solcher Bäume und mitteln deren Vorhersagen. <code>sklearn.tree.DecisionTreeClassifier</code>" },
          { title:"Markov-Ketten — das Herzstück von Sprachmodellen", tag:"Deep Learning",
            text:"Das Lernkartei-Beispiel in Aufgabe 3 ist eine <strong>Markov-Kette</strong>. Ein Zustand hängt nur vom aktuellen Zustand ab, nicht von der Geschichte. ChatGPT und alle Sprachmodelle basieren auf einem sehr komplexen Markov-Prozess: P(nächstes Wort | alle vorherigen Wörter). Baumdiagramme sind das visuelle Werkzeug für einfache Markov-Ketten." },
          { title:"Bayesianische Netze — KI-Diagnose", tag:"AI",
            text:"Bayesianische Netze sind gerichtete Graphen (erweiterte Bäume) wo jeder Knoten eine bedingte Wahrscheinlichkeit hat. Sie werden für medizinische Diagnose (IBM Watson Health), Spam-Filterung, und Risikoanalyse genutzt. Die Berechnung von Wahrscheinlichkeiten in diesen Netzen ist Pfadregel + Summenregel auf einem komplexeren Graphen." }
        ]
      ),
      item(
        "Satz von Bayes: P(B|A) = P(A|B)·P(B) / P(A) — Ursache aus Wirkung",
        "S. 46 · Sicher S. 173",
        `Bayes ist der wichtigste Satz der Wahrscheinlichkeitstheorie. Er erlaubt dir, <strong>von Wirkung auf Ursache zu schließen</strong>.<br><br>
        <strong>Problem ohne Bayes:</strong> Du weißt wie wahrscheinlich ein positiver Test bei Kranken ist. Aber du willst wissen: ist jemand wirklich krank, wenn der Test positiv ist? Das ist die umgekehrte Richtung.<br><br>
        <strong>Formel:</strong> <span class="formula">P(B|A) = P(A|B)·P(B) / P(A)</span><br><br>
        <strong>Praktische Form mit totalem Wahrscheinlichkeitssatz:</strong><br>
        <span class="formula">P(B|A) = P(A|B)·P(B) / [P(A|B)·P(B) + P(A|B̄)·P(B̄)]</span><br><br>
        <strong>Der wichtigste Effekt:</strong> Wenn eine Krankheit selten ist (z.B. 1%), kann ein 99%-genauer Test dennoch eine sehr niedrige Trefferquote haben — weil viel mehr gesunde Menschen getestet werden und die 1% Falsch-Positive überwiegen.`,
        "WANN Bayes: Du kennst P(Test positiv | krank) aber willst P(krank | Test positiv). Oder: du kennst Trefferrate einer Ursache, willst Wahrscheinlichkeit der Ursache nach Beobachtung. Schlüsselwörter: 'rückschließen', 'Ursache gegeben Wirkung'.",
        [
          "P(A|B) und P(B) identifizieren (was du weißt)",
          "P(A) mit totalem Wahrscheinlichkeitssatz berechnen: P(A|B)·P(B) + P(A|B̄)·P(B̄)",
          "Bayes-Formel einsetzen",
          "Ergebnis interpretieren — oft überraschend!"
        ],
        "P(krank|positiv) = P(positiv|krank)",
        "P(krank|positiv) ≠ P(positiv|krank) — das ist der 'Prosecutor's Fallacy'!",
        [
          { diff:"easy", q:"Krankheit bei 1% der Bevölkerung. Test: 95% richtig positiv (Sensitivität), 10% falsch positiv. Person testet positiv. Wie wahrscheinlich tatsächlich krank?",
            steps:[
              {n:1, t:"P(krank)=0.01, P(positiv|krank)=0.95, P(positiv|gesund)=0.10"},
              {n:2, t:"P(positiv) = 0.95·0.01 + 0.10·0.99 = 0.0095+0.099 = 0.1085"},
              {n:3, t:"Bayes: P(krank|positiv) = 0.0095/0.1085 ≈ 0.0875 = 8.75%"},
              {n:4, t:"Obwohl Test 95% genau ist — nur ~9% Chance auf Krankheit!"}
            ],
            result:"P(krank|positiv) ≈ 8.75% — überraschend niedrig!" },
          { diff:"medium", q:"3 Produktionsmaschinen: A (50% der Produktion, 3% Ausschuss), B (30%, 4% Ausschuss), C (20%, 5% Ausschuss). Ein Ausschussteil gefunden — von welcher Maschine wahrscheinlich?",
            steps:[
              {n:1, t:"P(Ausschuss) = 0.5·0.03+0.3·0.04+0.2·0.05 = 0.015+0.012+0.01=0.037"},
              {n:2, t:"P(A|Ausschuss) = 0.5·0.03/0.037 = 0.015/0.037 ≈ 40.5%"},
              {n:3, t:"P(B|Ausschuss) = 0.3·0.04/0.037 = 0.012/0.037 ≈ 32.4%"},
              {n:4, t:"P(C|Ausschuss) = 0.2·0.05/0.037 = 0.010/0.037 ≈ 27.1%"}
            ],
            result:"Wahrscheinlichst von Maschine A (40.5%)" }
        ],
        [
          { title:"Naive Bayes Classifier — Spam-Filter", tag:"Machine Learning",
            text:"<strong>Naive Bayes</strong> ist einer der einfachsten aber effektivsten ML-Klassifikatoren. Für Spam-Filterung: P(Spam|Wörter) = P(Wörter|Spam)·P(Spam) / P(Wörter). Die 'naive' Annahme: alle Wörter sind unabhängig voneinander. Trotz dieser vereinfachenden Annahme funktioniert es sehr gut. Gmail und alle E-Mail-Clients nutzen Varianten davon. Implementierung in sklearn: <code>sklearn.naive_bayes.MultinomialNB</code>" },
          { title:"Bayesian Updating — wie KI aus Erfahrung lernt", tag:"AI",
            text:"<strong>Bayesian Updating</strong> ist der Kern des Lernens: Du startest mit einer Prior-Wahrscheinlichkeit P(Hypothese), siehst Daten, und aktualisierst auf die Posterior P(Hypothese|Daten) mit Bayes. Das geschieht rekursiv — jede neue Beobachtung verfeinert das Modell. Anwendungen: Online-Spam-Filter (lernen mit jeder neuen E-Mail), medizinische Diagnose-Systeme, A/B-Test-Auswertung bei Unternehmen wie Google." },
          { title:"Kalman-Filter — GPS und Robotik", tag:"Robotics / Systems",
            text:"Der <strong>Kalman-Filter</strong> ist Bayes in kontinuierlicher Form. Er schätzt den Zustand eines Systems (z.B. Position eines Roboters oder Fahrzeugs) indem er Vorhersagen aus dem Modell mit verrauschten Sensordaten kombiniert. Die Update-Gleichung des Kalman-Filters ist mathematisch äquivalent zu Bayes' Theorem für Normalverteilungen. GPS in deinem Handy, Autopiloten in Flugzeugen, selbstfahrende Autos — alle benutzen Kalman-Filter." }
        ]
      ),
    ]
  },
  {
    id:"st-s3", title:"4.3 · Binomialverteilung",
    items:[
      item(
        "Bernoulli-Formel: P(X=k) = C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ",
        "S. 51 · Sicher S. 186 · Tafelwerk S. 48",
        `Die Binomialverteilung modelliert: <strong>'n unabhängige Ja/Nein-Versuche, jeder mit Trefferwahrscheinlichkeit p'</strong>.<br><br>
        <strong>Formel erklärt:</strong><br>
        <span class="formula">C(n,k) = n! / (k!(n-k)!)</span> = wie viele Möglichkeiten gibt es, k Treffer in n Versuchen anzuordnen?<br>
        <span class="formula">pᵏ</span> = Wahrscheinlichkeit für genau k Treffer in genauer Reihenfolge<br>
        <span class="formula">(1−p)ⁿ⁻ᵏ</span> = Wahrscheinlichkeit für die restlichen (n−k) Nieten<br><br>
        <strong>Voraussetzungen für Binomialmodell:</strong><br>
        • Feste Anzahl n von Versuchen<br>
        • Genau 2 Ausgänge (Treffer/Niete)<br>
        • Konstante Trefferwahrscheinlichkeit p (→ mit Zurücklegen oder große Grundgesamtheit)<br>
        • Unabhängige Versuche`,
        "Binomialverteilung erkennen: festes n, zwei Ausgänge, gleichbleibendes p, unabhängig. Schlüsselwörter: 'n-mal wiederholt', 'mit Zurücklegen', 'jeder Versuch unabhängig'. OHNE Zurücklegen bei kleiner Grundgesamtheit → kein Binomialmodell!",
        [
          "Überprüfen: Binomialmodell anwendbar? (4 Voraussetzungen)",
          "n, k, p identifizieren",
          "C(n,k) berechnen",
          "Formel einsetzen: C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ",
          "Bei kumulierten Wahrscheinlichkeiten: Tafelwerk S. 55 nutzen"
        ],
        "P(X=k) für OHNE Zurücklegen mit kleiner Urne",
        "OHNE Zurücklegen + kleine Urne → Hypergeometrische Verteilung. OHNE Zurücklegen + große Urne (>50x größer als Stichprobe) ≈ Binomial",
        [
          { diff:"easy", q:"Münze 10x werfen. P(genau 3 Köpfe)?",
            steps:[
              {n:1, t:"n=10, k=3, p=0.5"},
              {n:2, t:"C(10,3) = 10!/(3!·7!) = 120"},
              {n:3, t:"P(X=3) = 120·(0.5)³·(0.5)⁷ = 120·(0.5)¹⁰"},
              {n:4, t:"= 120/1024 ≈ 0.117 = 11.7%"}
            ],
            result:"P(X=3) ≈ 11.7%" },
          { diff:"medium", q:"Produktion: 8% Ausschuss. Stichprobe 25 Teile. P(höchstens 3 Ausschuss)? P(mindestens 5 Ausschuss)?",
            steps:[
              {n:1, t:"n=25, p=0.08, X~B(25;0.08)"},
              {n:2, t:"P(X≤3): Aus Tabelle (Tafelwerk S.55) oder berechnen: ≈ 0.7717"},
              {n:3, t:"P(X≥5) = 1−P(X≤4) ≈ 1−0.9072 = 0.0928 ≈ 9.3%"}
            ],
            result:"P(X≤3)≈77.2%, P(X≥5)≈9.3%" },
          { diff:"hard", q:"Wie groß muss n sein damit P(X≥1) ≥ 0.99 bei p=0.05?",
            steps:[
              {n:1, t:"P(X≥1) = 1−P(X=0) = 1−(0.95)ⁿ ≥ 0.99"},
              {n:2, t:"(0.95)ⁿ ≤ 0.01"},
              {n:3, t:"n·ln(0.95) ≤ ln(0.01)"},
              {n:4, t:"n ≥ ln(0.01)/ln(0.95) = −4.605/(−0.0513) ≈ 89.8"},
              {n:5, t:"→ n ≥ 90 Versuche nötig"}
            ],
            result:"n ≥ 90" }
        ],
        [
          { title:"A/B-Testing — wie Tech-Unternehmen Entscheidungen treffen", tag:"Data Science",
            text:"Wenn Netflix ein neues UI testet oder Google eine neue Suchalgorithmus-Variante, führen sie A/B-Tests durch. Die Frage ist: 'Klicken signifikant mehr Nutzer auf Button A als Button B?' Das ist Binomialverteilung: n Nutzer, p = Klickwahrscheinlichkeit, X = Anzahl Klicks. Die statistische Signifikanz wird dann mit einem Hypothesentest (Binomialtest) geprüft. Python: <code>scipy.stats.binom_test(k, n, p)</code>" },
          { title:"Fehlerrate in Netzwerken", tag:"Networking",
            text:"In Netzwerkprotokollen (Ethernet, WiFi) hat jedes übertragene Bit eine kleine Fehlerwahrscheinlichkeit p (Bit-Error Rate). Für ein Paket mit n Bits: Wie viele Fehler erwartet man? Das ist Binomialverteilung mit E(X)=n·p. Fehlerkorrekturcodes (Hamming Code, Reed-Solomon) sind so designt, dass sie bis zu k Fehler pro Paket korrigieren können — basierend auf der Binomialverteilung der Fehler." },
          { title:"Qualitätssicherung in Software", tag:"Software Engineering",
            text:"In Software-Testing: Wenn 5% aller Code-Pfade Bugs haben und du 50 Tests schreibst, wie viele werden fehlschlagen? X~B(50;0.05). Der Erwartungswert μ=2.5 und Standardabweichung σ≈1.54. Code Coverage Tools und statistische Testplanung basieren auf genau diesem Modell. pytest-statistics in Python nutzt solche Überlegungen für Test-Priorisierung." }
        ]
      ),
    ]
  },
  {
    id:"st-s4", title:"4.4 · Hypothesentest",
    items:[
      item(
        "Hypothesentest: H₀ aufstellen, Signifikanzniveau α, Ablehnbereich bestimmen",
        "S. 72–88 · Sicher S. 197–202",
        `Ein <strong>Hypothesentest</strong> ist ein formalisierter Weg zu entscheiden: 'Widersprechen meine Daten der Nullhypothese H₀ stark genug, dass ich sie ablehnen kann?'<br><br>
        <strong>Die Logik:</strong><br>
        1. Stelle die zu testende Behauptung auf: <strong>H₀</strong> (was du in Frage stellst)<br>
        2. Lege fest wie oft du bereit bist, falsch zu liegen: <strong>α</strong> (Signifikanzniveau, meist 5%)<br>
        3. Berechne den <strong>Ablehnbereich</strong>: die Werte die bei H₀ so selten wären, dass sie ein Zeichen gegen H₀ sind<br>
        4. Beobachte den tatsächlichen Wert und prüfe: liegt er im Ablehnbereich?<br><br>
        <strong>Wichtig:</strong> H₀ ablehnen ≠ das Gegenteil beweisen. H₀ beibehalten ≠ H₀ beweisen. Man kann nur zeigen dass H₀ "unwahrscheinlich" ist.`,
        "Testtyp erkennen: H₁: p < p₀ → linksseitig. H₁: p > p₀ → rechtsseitig. H₁: p ≠ p₀ → zweiseitig. Ablehnbereich: wo liegt er? Links → kleine k. Rechts → große k. Zweiseitig → beide Enden.",
        [
          "H₀ und H₁ formulieren (H₀ = was getestet wird, H₁ = Alternative)",
          "Testtyp bestimmen (links-, rechts-, zweiseitig?)",
          "Signifikanzniveau α festlegen",
          "Ablehnbereich bestimmen: kleinste/größte k mit P(X≤k)≤α bzw. P(X≥k)≤α",
          "Beobachteten Wert prüfen: im Ablehnbereich → H₀ ablehnen"
        ],
        "Ablehnbereich berechnen: P(X≤k) ≤ α → dieses k direkt als Grenze nehmen",
        "Ablehnbereich ist die MENGE aller k mit P(X≤k)≤α — das größte solche k ist die Grenze",
        [
          { diff:"medium", q:"Münze: H₀: p=0.5 (fair). 20 Würfe, nur 5 Köpfe. Linksseitiger Test, α=0.05. Entscheidung?",
            steps:[
              {n:1, t:"X~B(20;0.5) unter H₀. Linksseitig: H₁: p<0.5"},
              {n:2, t:"Ablehnbereich: alle k mit P(X≤k)≤0.05"},
              {n:3, t:"Aus Tafelwerk: P(X≤5)=0.0207≤0.05 ✓, P(X≤6)=0.0577>0.05 ✗"},
              {n:4, t:"Ablehnbereich: {0,1,2,3,4,5}"},
              {n:5, t:"Beobachteter Wert 5 liegt im Ablehnbereich → H₀ ablehnen auf 5%-Niveau"}
            ],
            result:"H₀ ablehnen — Münze wahrscheinlich nicht fair" },
          { diff:"hard", q:"Fehler 1. und 2. Art: Oben: Ablehnbereich {0,...,5}. Wahres p sei tatsächlich 0.3. P(Fehler 2. Art)?",
            steps:[
              {n:1, t:"Fehler 2. Art: H₀ beibehalten obwohl p=0.3 (≠0.5)"},
              {n:2, t:"= P(X>5 | X~B(20;0.3)) = 1−P(X≤5|p=0.3)"},
              {n:3, t:"Aus Tabelle: P(X≤5|B(20;0.3)) ≈ 0.4164"},
              {n:4, t:"P(Fehler 2. Art) = 1−0.4164 = 0.5836 ≈ 58.4%!"},
              {n:5, t:"→ Mit diesem Test würde man p=0.3 sehr oft nicht erkennen"}
            ],
            result:"P(Fehler 2. Art) ≈ 58.4% — großer Tradeoff!" }
        ],
        [
          { title:"A/B-Testing bei Google, Netflix, Amazon", tag:"Data Science",
            text:"Wenn Google testet ob eine neue Suchfeature besser ist, läuft ein formaler Hypothesentest: H₀ = kein Unterschied, α = 0.05. 'Statistical significance' in Tech bedeutet p-Wert < α. <code>scipy.stats.binom_test(successes, n, p_null)</code> macht genau das in Python. Amazon führt täglich hunderte solcher Tests durch — Farbe eines Buttons, Reihenfolge von Suchergebnissen, Pricing-Algorithmen. Jede Entscheidung wird statistisch validiert." },
          { title:"Fehler 1./2. Art in ML — Precision und Recall", tag:"Machine Learning",
            text:"In ML heißen diese Fehler anders aber bedeuten dasselbe:<br>• Fehler 1. Art = False Positive (FP): Modell sagt 'krank' aber Person ist gesund<br>• Fehler 2. Art = False Negative (FN): Modell sagt 'gesund' aber Person ist krank<br>Precision = TP/(TP+FP) misst wie oft Alarm richtig ist. Recall = TP/(TP+FN) misst wie oft echte Fälle erkannt werden. Der Tradeoff zwischen Fehler 1. und 2. Art ist der <strong>Precision-Recall-Tradeoff</strong> — eines der wichtigsten Konzepte im ML." },
          { title:"Sicherheitssysteme & Anomalie-Erkennung", tag:"Security",
            text:"Intrusion Detection Systeme (IDS) in Netzwerken müssen entscheiden: normaler Traffic oder Angriff? Das ist ein kontinuierlicher Hypothesentest. Zu sensitiv (niedriges α) → viele Fehlalarme (Fehler 1. Art) → Administratoren ignorieren Warnungen. Zu wenig sensitiv → echte Angriffe werden übersehen (Fehler 2. Art). Die Kalibrierung von IDS-Systemen ist direkt angewandter Hypothesentest." }
        ]
      ),
    ]
  },
  ]
},

]; // END SUBJECTS
