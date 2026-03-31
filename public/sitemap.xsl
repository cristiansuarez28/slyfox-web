<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Sitemap de Slyfox</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #24292e;
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 { font-size: 24px; }
          .intro { margin-bottom: 20px; }
          .url-list { border: 1px solid #e1e4e8; border-radius: 6px; overflow: hidden; }
          table { width: 100%; border-collapse: collapse; }
          th { text-align: left; background: #f6f8fa; padding: 12px 16px; }
          td { padding: 12px 16px; border-top: 1px solid #e1e4e8; }
          tr:hover { background-color: #f6f8fa; }
          .count { margin: 20px 0; color: #6a737d; }
        </style>
      </head>
      <body>
        <h1>Sitemap de Slyfox</h1>
        <div class="intro">
          <p>Este sitemap contiene todas las URLs disponibles en nuestro sitio web.</p>
        </div>
        <div class="count">
          <p>Total de URLs: <xsl:value-of select="count(sitemap:urlset/sitemap:url)" /></p>
        </div>
        <div class="url-list">
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Última modificación</th>
                <th>Frecuencia de cambio</th>
                <th>Prioridad</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc" />
                    </a>
                  </td>
                  <td><xsl:value-of select="sitemap:lastmod" /></td>
                  <td><xsl:value-of select="sitemap:changefreq" /></td>
                  <td><xsl:value-of select="sitemap:priority" /></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
