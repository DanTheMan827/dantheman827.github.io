---
permalink: /
title: Projects by DanTheMan827
ads: [bottom]
---

<ul>
  {% for page in site.pages %}
    {% if page.type == "project" or page.type == "project-link"  %}
      {% if page.group] == null %}
        {% assign pageData = page %}
      {% else %}
        {% assign pageData = site.data[{{page.group}}] %}
      {% endif %}
      
      <li><a href="{{ page.url }}">{{ pageData.title }}</a>: {{ pageData.description }}</li>
    {% endif %}
  {% endfor %}
</ul>