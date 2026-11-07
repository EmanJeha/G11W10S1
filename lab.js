/* Database Lab · Grade 11 · Week 10 · Session 1 · Introduction to Databases
   Design a Students table (columns, data types, primary key), insert records with real validation,
   link a foreign key to Classes and look a student up with their class.
   Usage: const lab = mountLab(root, { fs: '18px', height: '640px', onChange() {} }) */
(function () {
  const CSS = `
.db{--ink:#1B1F3B;font-size:var(--dbfs,18px);font-family:Nunito,system-ui,sans-serif;color:var(--ink);display:grid;grid-template-columns:minmax(0,1.55fr) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr);gap:.75em;height:var(--dbh,640px)}
.db *{box-sizing:border-box}
.db-next{grid-column:1/-1;display:flex;align-items:center;gap:.8em;background:linear-gradient(90deg,#fff2c4,#fff7e0);border:3px solid #FFB020;border-radius:1em;padding:.5em .9em;font-weight:800}
.db-next .tag{background:#FFB020;color:#fff;border-radius:.6em;padding:.25em .6em;font:900 .8em Nunito;letter-spacing:.1em;flex:none}
.db-next .txt{flex:1;line-height:1.3}
.db-btn{border:0;border-radius:.65em;padding:.42em .75em;font:800 .85em Nunito;cursor:pointer;background:#fff;color:var(--ink);box-shadow:0 .2em 0 #dfe3f2;white-space:nowrap}
.db-btn.p{background:#5B5BF0;color:#fff;box-shadow:0 .2em 0 #3b3bc0}.db-btn.g{background:#12B886;color:#fff;box-shadow:0 .2em 0 #0b8a62}.db-btn.o{background:#FFB020;color:#fff;box-shadow:0 .2em 0 #c98600}
.db-col{display:flex;flex-direction:column;gap:.6em;min-height:0}
.db-card{background:#fff;border-radius:1em;padding:.55em .75em;box-shadow:0 .3em 0 #e4e1f5}
.db-h{display:flex;align-items:center;gap:.5em;font:900 .74em Nunito;letter-spacing:.13em;text-transform:uppercase;color:#5B5BF0;margin-bottom:.4em}
.db-h .sp{flex:1}
.db-cols{display:flex;flex-direction:column;gap:.3em}
.db-cr{display:grid;grid-template-columns:1.2fr 1fr auto auto;gap:.4em;align-items:center}
.db-cr input,.db-cr select,.db-ins input,.db-q input,.db-fk select{font:700 .85em 'JetBrains Mono',monospace;padding:.32em .45em;border-radius:.5em;border:2px solid #d5e2fb;background:#fff;color:var(--ink);min-width:0;width:100%}
.db-cr input:disabled,.db-cr select:disabled{background:#f4f6ff;color:#7a80a6}
.db-pk{display:flex;align-items:center;gap:.25em;font:800 .78em Nunito;color:#b36b00;cursor:pointer;white-space:nowrap}
.db-x{border:0;background:#ffe3e3;color:#c0264a;border-radius:.45em;width:1.7em;height:1.7em;font-weight:900;cursor:pointer}
.db-sug{display:flex;flex-wrap:wrap;gap:.3em;margin-top:.4em}
.db-sug button{border:0;border-radius:.5em;padding:.2em .5em;background:#EEF0FF;color:#3730a3;font:700 .75em 'JetBrains Mono';cursor:pointer}
.db-ins{display:flex;gap:.35em;flex-wrap:wrap;align-items:flex-end}
.db-ins label{display:flex;flex-direction:column;gap:.1em;font:800 .66em Nunito;color:#6b7096;flex:1;min-width:6.5em}
.db-tw{flex:1;min-height:0;overflow:auto}
.db-t{width:100%;border-collapse:separate;border-spacing:0;font:600 .8em 'JetBrains Mono',monospace}
.db-t th{position:sticky;top:0;background:#5B5BF0;color:#fff;padding:.35em .5em;text-align:left;font-weight:700;white-space:nowrap}
.db-t th:first-child{border-radius:.5em 0 0 0}.db-t th:last-child{border-radius:0 .5em 0 0}
.db-t th small{display:block;font:700 .75em Nunito;opacity:.85}
.db-t td{padding:.32em .5em;border-bottom:2px solid #f0f2f8;white-space:nowrap}
.db-t tr.new td{animation:dbn 1.2s}
.db-t tr.hit td{background:#fff2d6}
@keyframes dbn{0%{background:#dcfbee}100%{background:transparent}}
.db-t .nul{color:#b4b9d6;font-style:italic}
.db-msg{padding:.45em .7em;border-radius:.7em;font:800 .82em/1.35 Nunito;background:#f4f6ff;min-height:2.2em}
.db-msg.good{background:#dcfbee;color:#0b6a4a}.db-msg.bad{background:#ffe3e3;color:#a31f1f}.db-msg.info{background:#fff2d6;color:#8a5b00}
.db-fk{display:flex;gap:.4em;align-items:center;flex-wrap:wrap;font:800 .8em Nunito}
.db-fk select{width:auto}
.db-q{display:flex;gap:.4em;align-items:center}
.db-q input{width:7em}
.db-res{margin-top:.4em;font:700 .8em/1.4 'JetBrains Mono',monospace;background:#151936;color:#e9ecff;border-radius:.6em;padding:.45em .6em;min-height:2.4em;white-space:pre-wrap}
.db-res .k{color:#c4a7ff}.db-res .s{color:#ffd27a}.db-res .ok{color:#7ee2b8}
.db-mis{flex:1;min-height:0;overflow:auto}
.db-m{display:flex;gap:.45em;align-items:flex-start;padding:.24em 0;border-top:2px solid #f2f3fa;font:700 .78em/1.28 Nunito;color:#4a5078}
.db-m:first-of-type{border-top:0}
.db-m .ck{flex:none;width:1.35em;height:1.35em;border-radius:.4em;background:#e7e9f5;color:#fff;display:grid;place-items:center;font-size:.85em}
.db-m.on{color:#12884f}.db-m.on .ck{background:#16a34a}.db-m.cur{color:var(--ink)}.db-m.cur .ck{background:#FFB020}
.db-m .sm{border:0;background:#EEF0FF;color:#3730a3;border-radius:.5em;font:800 .78em Nunito;padding:.12em .45em;cursor:pointer;margin-left:auto;flex:none}
@media (max-width:900px){.db{grid-template-columns:minmax(0,1fr);height:auto}.db-next{flex-wrap:wrap}.db-tw{max-height:16em}}
`;
  const TYPES = ['INT', 'VARCHAR(50)', 'DATE', 'DECIMAL(3,2)', 'BOOLEAN'];
  const SUG = [['StudentID', 'INT'], ['FirstName', 'VARCHAR(50)'], ['BirthDate', 'DATE'], ['GPA', 'DECIMAL(3,2)'], ['IsActive', 'BOOLEAN'], ['ClassID', 'INT']];
  const CLASSES = [[111, '11-A'], [112, '11-B'], [113, '11-C']];
  const MISSIONS = [
    { id: 'cols', t: 'Design the Students table: add at least 4 columns' },
    { id: 'pk', t: 'Choose the PRIMARY KEY (🔑 the column that is unique for every student)' },
    { id: 'rows', t: 'Insert 3 student records' },
    { id: 'dup', t: 'Try to insert a student with an ID that already exists' },
    { id: 'type', t: 'Try a wrong data type (e.g. text in an INT column)' },
    { id: 'fk', t: 'Link ClassID as a FOREIGN KEY to the Classes table' },
    { id: 'join', t: 'Find a student by ID and see their class name' },
  ];
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  window.mountLab = function (root, opts = {}) {
    if (!document.getElementById('db-css')) { const st = document.createElement('style'); st.id = 'db-css'; st.textContent = CSS; document.head.appendChild(st); }
    const el = document.createElement('div'); el.className = 'db'; el.style.setProperty('--dbfs', opts.fs || '18px'); el.style.setProperty('--dbh', opts.height || '640px');
    el.innerHTML = `<div class="db-next"><span class="tag">NEXT</span><span class="txt"></span><button class="db-btn p" data-a="show">▶ Show me</button></div>
      <div class="db-col">
        <div class="db-card"><div class="db-h">🛠 1 · Design · Students table<span class="sp"></span><button class="db-btn" data-a="addcol">＋ Column</button></div><div class="db-cols"></div><div class="db-sug"></div></div>
        <div class="db-card"><div class="db-h">📥 2 · Insert a record<span class="sp"></span><button class="db-btn" data-a="clearrows">🗑 Clear records</button></div><div class="db-ins"></div></div>
        <div class="db-card db-tw"><table class="db-t"></table></div>
        <div class="db-msg">Start by adding columns to the Students table.</div>
      </div>
      <div class="db-col">
        <div class="db-card"><div class="db-h">🏫 Classes table</div><table class="db-t cls"><tr><th>🔑 ClassID<small>INT · PK</small></th><th>ClassName<small>VARCHAR(50)</small></th></tr>${CLASSES.map(([i, n]) => `<tr><td>${i}</td><td>'${n}'</td></tr>`).join('')}</table>
          <div class="db-fk" style="margin-top:.5em">🔗 Students.<select class="fkc"></select> → Classes.ClassID <button class="db-btn o" data-a="fk">Link as FK</button></div></div>
        <div class="db-card"><div class="db-h">🔎 3 · Find a student</div><div class="db-q">StudentID <input class="qid" placeholder="1001"><button class="db-btn g" data-a="q">Run query</button></div><div class="db-res">Results appear here.</div></div>
        <div class="db-card db-mis"><div class="db-h">Missions</div><div class="ml"></div></div>
      </div>`;
    root.appendChild(el);
    const $ = (s) => el.querySelector(s);
    let cols = [], rows = [], pk = null, fk = null, flags = {}, sticky = new Set(), cid = 0;
    const msg = (t, c = '') => { $('.db-msg').className = 'db-msg ' + c; $('.db-msg').innerHTML = t; };
    const locked = () => rows.length > 0;
    function validate(type, raw) {
      const v = String(raw).trim();
      if (v === '') return { ok: true, v: null };
      if (type === 'INT') return /^-?\d+$/.test(v) ? { ok: true, v: parseInt(v, 10) } : { ok: false, why: `INT needs a whole number, but got '${v}'` };
      if (type === 'VARCHAR(50)') return v.length <= 50 ? { ok: true, v } : { ok: false, why: 'VARCHAR(50) allows at most 50 characters' };
      if (type === 'DATE') { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v); const d = m && new Date(+m[1], +m[2] - 1, +m[3]); if (!m) return { ok: false, why: `DATE must look like YYYY-MM-DD (e.g. 2009-04-15), not '${v}'` }; return d.getMonth() === +m[2] - 1 && d.getDate() === +m[3] ? { ok: true, v } : { ok: false, why: `'${v}' is not a real date` }; }
      if (type === 'DECIMAL(3,2)') return /^-?\d(\.\d{1,2})?$/.test(v) ? { ok: true, v: (+v).toFixed(2) } : { ok: false, why: `DECIMAL(3,2) means 1 digit before and up to 2 after the point (e.g. 3.75), not '${v}'` };
      if (type === 'BOOLEAN') { const l = v.toLowerCase(); return ['true', 'false', '1', '0'].includes(l) ? { ok: true, v: l === 'true' || l === '1' ? 'TRUE' : 'FALSE' } : { ok: false, why: `BOOLEAN must be TRUE or FALSE, not '${v}'` }; }
      return { ok: true, v };
    }
    function paintDesign() {
      const box = $('.db-cols'); box.innerHTML = '';
      if (!cols.length) box.innerHTML = '<div style="color:#9aa0c4;font-weight:800;font-size:.85em">No columns yet. Tap a suggestion below or ＋ Column.</div>';
      cols.forEach((c) => {
        const r = document.createElement('div'); r.className = 'db-cr';
        r.innerHTML = `<input value="${esc(c.name)}" placeholder="column name" ${locked() ? 'disabled' : ''}><select ${locked() ? 'disabled' : ''}>${TYPES.map((t) => `<option ${t === c.type ? 'selected' : ''}>${t}</option>`).join('')}</select><label class="db-pk"><input type="radio" name="pk${cid}" ${pk === c.id ? 'checked' : ''} ${locked() ? 'disabled' : ''}>🔑 PK</label><button class="db-x" ${locked() ? 'disabled' : ''}>×</button>`;
        const [ni, ts, , ] = r.children;
        ni.onchange = () => { const nm = ni.value.trim().replace(/\s+/g, ''); if (nm !== ni.value.trim()) msg('Column names have no spaces, so it was written as ' + nm + '.', 'info'); if (cols.some((x) => x !== c && x.name.toLowerCase() === nm.toLowerCase())) { msg(`There is already a column called ${nm}. Column names must be unique.`, 'bad'); ni.value = c.name; return; } c.name = nm; paint(); };
        ts.onchange = () => { c.type = ts.value; paint(); };
        r.querySelector('input[type=radio]').onchange = () => { pk = c.id; msg(`🔑 <b>${c.name || 'This column'}</b> is the primary key: every record must have a unique, non-empty value.`, 'good'); paint(); };
        r.querySelector('.db-x').onclick = () => { cols = cols.filter((x) => x !== c); if (pk === c.id) pk = null; if (fk === c.id) fk = null; paint(); };
        box.appendChild(r);
      });
      $('.db-sug').innerHTML = locked() ? '<span style="font:800 .75em Nunito;color:#8a5b00">🔒 Design is locked while the table has records. Clear records to redesign.</span>' : SUG.filter(([n]) => !cols.some((c) => c.name === n)).map(([n, t]) => `<button data-s="${n}|${t}">＋ ${n} <span style="opacity:.6">${t}</span></button>`).join('');
      el.querySelectorAll('[data-s]').forEach((b) => b.onclick = () => { const [n, t] = b.dataset.s.split('|'); addCol(n, t); });
    }
    function addCol(name = '', type = 'VARCHAR(50)') { if (locked()) { msg('Clear the records first to change the design.', 'info'); return; } if (cols.length >= 7) { msg('7 columns is plenty for this lab!', 'info'); return; } cols.push({ id: ++cid, name, type }); paint(); if (name) msg(`➕ Column <b>${name}</b> · ${type}`, 'good'); }
    function paintInsert() {
      const f = $('.db-ins');
      if (!cols.length) { f.innerHTML = '<span style="color:#9aa0c4;font-weight:800;font-size:.85em">Design the table first.</span>'; return; }
      const keep = {}; f.querySelectorAll('input').forEach((i) => keep[i.dataset.c] = i.value);
      f.innerHTML = cols.map((c) => `<label>${pk === c.id ? '🔑 ' : ''}${fk === c.id ? '🔗 ' : ''}${esc(c.name || '?')}<small style="font-weight:700;opacity:.7">${c.type}</small><input data-c="${c.id}" value="${esc(keep[c.id] || '')}" placeholder="${{ INT: '1001', 'VARCHAR(50)': 'Sara', DATE: '2009-04-15', 'DECIMAL(3,2)': '3.75', BOOLEAN: 'TRUE' }[c.type]}"></label>`).join('') + '<button class="db-btn g" data-a="ins">INSERT ▶</button>';
      f.querySelector('[data-a="ins"]').onclick = () => insert(Object.fromEntries([...f.querySelectorAll('input')].map((i) => [i.dataset.c, i.value])));
      f.querySelectorAll('input').forEach((i) => i.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Enter') f.querySelector('[data-a="ins"]').click(); }));
    }
    let lastNew = -1, hit = -1;
    function paintTable() {
      const t = el.querySelector('.db-tw .db-t');
      if (!cols.length) { t.innerHTML = ''; return; }
      t.innerHTML = `<tr>${cols.map((c) => `<th>${pk === c.id ? '🔑 ' : ''}${fk === c.id ? '🔗 ' : ''}${esc(c.name || '?')}<small>${c.type}${pk === c.id ? ' · PK' : ''}${fk === c.id ? ' · FK' : ''}</small></th>`).join('')}</tr>` +
        (rows.length ? rows.map((r, i) => `<tr class="${i === lastNew ? 'new' : ''} ${i === hit ? 'hit' : ''}">${cols.map((c) => r[c.id] == null ? '<td class="nul">NULL</td>' : `<td>${c.type.startsWith('VARCHAR') || c.type === 'DATE' ? `'${esc(r[c.id])}'` : esc(r[c.id])}</td>`).join('')}</tr>`).join('') : `<tr><td colspan="${cols.length}" class="nul">No records yet: the table is empty.</td></tr>`);
      lastNew = -1;
    }
    function insert(vals) {
      if (!cols.length) { msg('Design the table first.', 'info'); return false; }
      if (cols.some((c) => !c.name)) { msg('Every column needs a name.', 'bad'); return false; }
      if (pk == null) { msg('❌ Choose a 🔑 PRIMARY KEY before inserting, so every record can be identified.', 'bad'); return false; }
      const rec = {};
      for (const c of cols) {
        const r = validate(c.type, vals[c.id] ?? '');
        if (!r.ok) { flags.type = true; msg(`❌ Data type error in <b>${c.name}</b>: ${esc(r.why)}. The database refused the record.`, 'bad'); paint(); return false; }
        rec[c.id] = r.v;
      }
      const P = cols.find((c) => c.id === pk);
      if (rec[pk] == null) { msg(`❌ Primary key error: <b>${P.name}</b> cannot be empty (NULL).`, 'bad'); return false; }
      if (rows.some((r) => String(r[pk]) === String(rec[pk]))) { flags.dup = true; msg(`❌ Primary key error: <b>${P.name} ${esc(rec[pk])}</b> already exists. Every record needs a unique key, so the database refused it.`, 'bad'); paint(); return false; }
      if (fk != null && rec[fk] != null && !CLASSES.some(([i]) => i === rec[fk])) { flags.fkref = true; msg(`❌ Foreign key error: ClassID <b>${esc(rec[fk])}</b> is not in the Classes table. You can only link to a class that exists.`, 'bad'); paint(); return false; }
      rows.push(rec); lastNew = rows.length - 1; hit = -1;
      $('.db-ins').querySelectorAll('input').forEach((i) => i.value = '');
      msg(`✅ 1 record inserted. The table now has <b>${rows.length}</b> record${rows.length > 1 ? 's' : ''} (rows).`, 'good'); paint(); return true;
    }
    function paintFK() { const s = $('.fkc'); const cur = s.value; s.innerHTML = cols.filter((c) => c.name).map((c) => `<option value="${c.id}" ${(fk === c.id || (!fk && c.name === 'ClassID')) ? 'selected' : ''}>${esc(c.name)}</option>`).join('') || '<option value="">(no columns)</option>'; if (cur && !fk && [...s.options].some((o) => o.value === cur)) s.value = cur; }
    $('[data-a="fk"]').onclick = () => {
      const id = +$('.fkc').value; const c = cols.find((x) => x.id === id);
      if (!c) { msg('Add a ClassID column (INT) to Students first.', 'info'); return; }
      if (c.type !== 'INT') { msg(`❌ A foreign key must match the type of Classes.ClassID (INT). <b>${c.name}</b> is ${c.type}.`, 'bad'); return; }
      if (pk === c.id) { msg('❌ This column is the primary key of Students. Pick the column that stores the class (ClassID).', 'bad'); return; }
      const bad = rows.find((r) => r[c.id] != null && !CLASSES.some(([i]) => i === r[c.id]));
      if (bad) { msg(`❌ Can’t link yet: a record has ${c.name} = ${bad[c.id]}, which is not in Classes.`, 'bad'); return; }
      fk = c.id; flags.fk = true; msg(`🔗 <b>Students.${c.name}</b> is now a FOREIGN KEY that points to <b>Classes.ClassID</b>. The two tables are related!`, 'good'); paint();
    };
    $('[data-a="q"]').onclick = () => {
      const res = $('.db-res'); const P = cols.find((c) => c.id === pk);
      if (!P) { res.textContent = 'Choose a primary key first.'; return; }
      const q = $('.qid').value.trim(); const F = cols.find((c) => c.id === fk);
      const sql = `<span class="k">SELECT</span> * <span class="k">FROM</span> Students${F ? ` <span class="k">JOIN</span> Classes <span class="k">ON</span> Students.${esc(F.name)} = Classes.ClassID` : ''}\n<span class="k">WHERE</span> ${esc(P.name)} = <span class="s">${esc(q || '?')}</span>;`;
      const i = rows.findIndex((r) => String(r[pk]) === q); hit = i; paintTable();
      if (i < 0) { res.innerHTML = sql + '\n→ 0 rows'; msg(q ? `No student with ${esc(P.name)} ${esc(q)}.` : 'Type a StudentID to look up.', 'info'); return; }
      const r = rows[i]; const nameC = cols.find((c) => /name/i.test(c.name)) || cols.find((c) => c.type.startsWith('VARCHAR'));
      let line = `→ ${esc(P.name)} ${esc(r[pk])}${nameC ? ' · ' + esc(r[nameC.id] ?? 'NULL') : ''}`;
      if (F) { const cl = CLASSES.find(([id]) => id === r[fk]); line += cl ? ` · class <span class="ok">${cl[1]}</span>` : ' · class NULL'; if (cl) { flags.join = true; msg(`🔎 Found it! Through the foreign key, the database looked up class <b>${cl[1]}</b> in the Classes table.`, 'good'); } }
      else msg('Found the record! Link a foreign key to also see the class name.', 'info');
      res.innerHTML = sql + '\n' + line; paint();
    };
    $('.qid').addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Enter') $('[data-a="q"]').click(); });
    $('[data-a="addcol"]').onclick = () => addCol();
    $('[data-a="clearrows"]').onclick = () => { rows = []; hit = -1; msg('Records cleared. The design is unlocked again.'); paint(); };
    const done = (id) => { switch (id) { case 'cols': return cols.filter((c) => c.name).length >= 4; case 'pk': return pk != null && cols.length >= 4; case 'rows': return rows.length >= 3; case 'dup': return !!flags.dup; case 'type': return !!flags.type; case 'fk': return fk != null; case 'join': return !!flags.join; } };
    const tasks = () => MISSIONS.map((m) => { if (done(m.id)) sticky.add(m.id); return [m.t, sticky.has(m.id)]; });
    let nextM = null;
    function paint() {
      paintDesign(); paintInsert(); paintTable(); paintFK();
      const ts = tasks(); nextM = MISSIONS.find((m, i) => !ts[i][1]);
      $('.ml').innerHTML = MISSIONS.map((m, i) => `<div class="db-m ${ts[i][1] ? 'on' : m === nextM ? 'cur' : ''}"><span class="ck">${ts[i][1] ? '✓' : i + 1}</span><span>${m.t}</span><button class="sm" data-m="${i}">show</button></div>`).join('');
      $('.db-next .txt').innerHTML = nextM ? nextM.t : '🎉 All missions complete! Add a Grades table idea, or more students.';
      el.querySelectorAll('.ml [data-m]').forEach((b) => b.onclick = () => playDemo(MISSIONS[+b.dataset.m]));
      opts.onChange && opts.onChange();
    }
    // ---- demo ----
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = false;
    const byName = (n) => cols.find((c) => c.name === n);
    async function typeInsert(vals) { paintInsert(); const f = $('.db-ins'); for (const c of cols) { const i = f.querySelector(`[data-c="${c.id}"]`); if (!i) continue; i.value = ''; const v = vals[c.name] ?? ''; for (const ch of String(v)) { i.value += ch; await sleep(18); } } await sleep(250); return insert(Object.fromEntries([...f.querySelectorAll('input')].map((i) => [i.dataset.c, i.value]))); }
    const STU = [{ StudentID: 1001, FirstName: 'Sara', BirthDate: '2009-04-15', ClassID: 111 }, { StudentID: 1002, FirstName: 'Omar', BirthDate: '2009-09-02', ClassID: 112 }, { StudentID: 1003, FirstName: 'Lina', BirthDate: '2008-12-20', ClassID: 111 }];
    async function playDemo(m) {
      if (busy) return; busy = true;
      try {
        const ensureCols = async () => { if (!locked()) for (const [n, t] of [['StudentID', 'INT'], ['FirstName', 'VARCHAR(50)'], ['BirthDate', 'DATE'], ['ClassID', 'INT']]) if (!byName(n) && cols.length < 7) { addCol(n, t); await sleep(380); } };
        const ensurePK = async () => { if (pk == null) { await ensureCols(); const c = byName('StudentID') || cols[0]; if (c) { pk = c.id; msg(`🔑 <b>${c.name}</b> is the primary key.`, 'good'); paint(); await sleep(400); } } };
        const ensureRows = async () => { await ensurePK(); for (const s of STU) { if (rows.length >= 3) break; if (!rows.some((r) => String(r[pk]) === String(s.StudentID))) { await typeInsert(s); await sleep(450); } } };
        if (m.id === 'cols') await ensureCols();
        if (m.id === 'pk') await ensurePK();
        if (m.id === 'rows') await ensureRows();
        if (m.id === 'dup') { await ensureRows(); await typeInsert({ StudentID: rows[0][pk], FirstName: 'Copy', BirthDate: '2009-01-01', ClassID: 111 }); }
        if (m.id === 'type') { await ensurePK(); await typeInsert({ StudentID: 'ten', FirstName: 'Test', BirthDate: '15/04/2009', ClassID: 111 }); }
        if (m.id === 'fk') { await ensureCols(); const c = byName('ClassID'); if (c) $('.fkc').value = c.id; await sleep(300); $('[data-a="fk"]').click(); }
        if (m.id === 'join') { await ensureRows(); if (fk == null) { const c = byName('ClassID'); if (c) { $('.fkc').value = c.id; $('[data-a="fk"]').click(); await sleep(500); } } const q = $('.qid'); q.value = ''; for (const ch of String(rows[0] ? rows[0][pk] : '1001')) { q.value += ch; await sleep(60); } await sleep(250); $('[data-a="q"]').click(); }
      } finally { busy = false; }
    }
    $('[data-a="show"]').onclick = () => nextM && playDemo(nextM);
    paint();
    return {
      el, tasks,
      demoStep() { if (busy || !nextM) return false; playDemo(nextM); return true; },
      async demo() { for (const m of MISSIONS) if (!sticky.has(m.id)) { await playDemo(m); await sleep(800); } },
      reset() { cols = []; rows = []; pk = null; fk = null; flags = {}; sticky.clear(); hit = -1; $('.db-res').textContent = 'Results appear here.'; $('.qid').value = ''; msg('Fresh start: add columns to the Students table.'); paint(); },
    };
  };
})();
