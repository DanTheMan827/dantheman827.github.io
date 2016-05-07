---
permalink: /
title: Projects by DanTheMan827
ads: [bottom]
---

<ul>
  {% for page in site.pages %}
    {% if page.type == "project" or page.type == "project-link"  %}
      {% assign pageLink = page.url %}
      {% if page.type == "project-link" %}
        {% assign pageLink = page.github-link %}
      {% endif %}
      {% if page.group] == null %}
        {% assign pageData = page %}
      {% else %}
        {% assign pageData = site.data[{{page.group}}] %}
      {% endif %}
      
      <li><a href="{{ pageLink }}">{{ pageData.title }}</a>: {{ pageData.description }}</li>
    {% endif %}
  {% endfor %}
</ul>
