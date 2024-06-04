class ProjectPage {
  createProject(projectName) {
    cy.get('#createButton').click(); 
    cy.get('#project-name').type(projectName);
    cy.get('button[type="submit"]').click();
  }

  deleteProject(projectName) {
    // Kliknite na dugme "Projects" da biste se vratili na početnu stranicu projekata
    cy.get('.LtAczx').eq(0).click();
    // Kliknite na dugme za projekat kako biste otvorili meni
    cy.get('.fa-ellipsis').eq(0).click();

    // Kliknite na dugme "Remove" za brisanje projekta
    cy.contains('Remove').click();

    // Kliknite na dugme "Delete project" da biste potvrdili brisanje
    cy.get('.G1dmaA.X8bxUI.IAcAWv.m8z14Q', { force: true }).click();
  }
}

module.exports = new ProjectPage();
