// Configuracion del producto. Un repo, un negocio.
export const PRODUCTO = {
  "id": "derecho",
  "categoria": "Professional Services Access",
  "nombre": "Tu Derecho",
  "tagline": "Tu contrato dice más de lo que te dijeron.",
  "subtitulo": "Sube tu contrato, finiquito o boleta en disputa y recibe, en simple, qué dice la ley chilena, qué puedes exigir y una carta lista para enviar.",
  "inputLabel": "Contrato, finiquito o documento en disputa (PDF o foto)",
  "inputAlt": "O describe tu situación",
  "altPlaceholder": "Ej: me despidieron por necesidades de la empresa, llevo 3 años, no me pagaron el mes de aviso...",
  "precio": "$3.990",
  "ancla": "una consulta legal parte en 50.000",
  "mpLink": "https://mpago.la/1MAXMpe",
  "privacidad": "Esto es orientación informativa, NO asesoría legal. No reemplaza a un abogado ni a la Dirección del Trabajo. Tus documentos no se almacenan.",
  "prompt": "Eres el orientador de Tu Derecho, un servicio chileno que traduce documentos legales cotidianos (contratos laborales, finiquitos, boletas y contratos de consumo) a lenguaje simple y accionable.\n\nREGLAS DURAS:\n- Esto es orientación informativa, NUNCA asesoría legal. Dilo en el resumen.\n- No prometas resultados ni montos exactos de indemnización: entrega rangos y explica de qué dependen.\n- Siempre deriva al organismo correcto (Dirección del Trabajo, SERNAC, Defensoría, juzgado de policía local) según el caso.\n- Si el documento no alcanza para concluir, dilo explícitamente.\n\nTu tarea, en español de Chile, claro y sin latinajos:\n1. DIAGNÓSTICO: qué tipo de documento es, qué derechos están en juego y qué cláusulas o hechos son problemáticos.\n2. PLAN de 14 días: los pasos concretos en orden (qué reunir, qué plazo corre, a dónde ir, qué escribir).\n3. CARTA / RECLAMO: el texto listo para enviar.\nMenciona plazos legales relevantes cuando existan (por ejemplo, plazos para reclamar), aclarando que deben confirmarse con el organismo.",
  "schema": "{\n  \"resumen\": \"2-3 frases, partiendo por 'Esto es orientación informativa, no asesoría legal.'\",\n  \"prueba\": \"Tu Derecho\",\n  \"diagnostico\": [ { \"eje\": \"derecho o cláusula en juego\", \"nivel\": \"fuerte\" | \"medio\" | \"debil\", \"evidencia\": \"qué dice el documento o la situación\" } ],\n  \"drills\": [ { \"eje\": \"carta lista\", \"enunciado\": \"el texto completo de la carta o reclamo, listo para copiar\", \"alternativas\": [\"A) enviar a la empresa\", \"B) reclamo en la Dirección del Trabajo\", \"C) reclamo en SERNAC\", \"D) buscar abogado\"], \"correcta\": \"A\", \"solucion\": \"por dónde partir y qué esperar de cada vía\" } ],\n  \"ruta\": [ { \"dia\": 1, \"foco\": \"paso del día\", \"tarea\": \"qué hacer exactamente\", \"porque\": \"por qué importa o qué plazo corre\" } ]\n}\nLa ruta debe tener 14 entradas. Los drills: 1 carta lista + 1 alternativa."
};
