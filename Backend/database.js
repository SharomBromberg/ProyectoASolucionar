const path = require('path');
const sqlite3 = require('sqlite3').verbose();

// Ruta del archivo físico de la base de datos SQLite
const DB_PATH = path.join(__dirname, 'pokedex.db');

// Conexión al motor SQLite
const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error('[ERROR] Error al abrir la base de datos SQLite:', err.message);
    } else {
        console.log(`\n[SQLite] Base de datos conectada en: ${DB_PATH}`);
        inicializarEsquema();
    }
});

// Helper para ejecutar sentencias SQL con Promesas (INSERT, UPDATE, DELETE, PRAGMA)
function runSQL(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) return reject(err);
            resolve({ lastID: this.lastID, changes: this.changes });
        });
    });
}

// Helper para obtener una sola fila (SELECT ... LIMIT 1)
function getSQL(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, row) => {
            if (err) return reject(err);
            resolve(row);
        });
    });
}

// Helper para obtener múltiples filas (SELECT)
function allSQL(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}

// ============================================================================
// ACTIVIDAD DEL ESTUDIANTE (MÓDULO 2): DISEÑO LÓGICO, PRAGMAS, TABLAS E ÍNDICES
// ============================================================================
async function inicializarEsquema() {
    try {

    }
}

module.exports = {
    db,
    DB_PATH,
    runSQL,
    getSQL,
    allSQL
};
