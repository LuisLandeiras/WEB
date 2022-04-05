<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
      <table border="1">
          <tr>
              <td><h3>Identificação</h3></td>
              <td><h3>Sexo</h3></td>
              <td><h3>Nome</h3></td>
              <td><h3>Ano de Nascimento</h3></td>
              <td><h3>BI</h3></td>
              <td><h3>Contribuinte</h3></td>
              <td><h3>Sistema de Saúde</h3></td>
          </tr>
          <tr>
            <xsl:for-each select="hospital/paciente">
                    <td><xsl:value-of select="hospital/paciente/identificacao"/></td>
                    <td><xsl:value-of select="hospital/paciente/sexo"/></td>
                    <td><xsl:value-of select="hospital/paciente/nome"/></td>
                    <td><xsl:value-of select="hospital/paciente/ano"/></td>  
                    <td><xsl:value-of select="hospital/paciente/bi"/></td>
                    <td><xsl:value-of select="hospital/paciente/contribuinte"/></td>
                    <td><xsl:value-of select="hospital/paciente/SistemaDeSaude"/></td>
            </xsl:for-each>
          </tr>
      </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>