---
title: Projects by DanTheMan827
ads: [bottom]
---

<ul>
  {% for page in site.pages %}
    {% if page.type == "project"  %}
      <li><a href="{{ page.url }}">{{ page.title }}</a>: {{ page.description }}</li>
    {% endif %}
	{% if page.type == "project-link"  %}
      <li><a href="{{ page.github-link }}">{{ page.title }}</a>: {{ page.description }}</li>
    {% endif %}
  {% endfor %}
</ul>