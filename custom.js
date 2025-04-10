export function setup({ spi, log }) {
  log("Simulation RC522 démarrée.");

  spi.onTransfer((data) => {
    // Réponse simulée à une requête SPI
    const response = data.map(byte => 0xA5); // Exemple de réponse fixe
    return response;
  });
}
