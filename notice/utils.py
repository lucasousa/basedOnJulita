from django.utils.text import slugify

def generator_unique_slug(instancia_model, title, fiel_slug):
    slug = slugify(title)
    model_class = instancia_model.__class__
    while model_class._default_manager.filter(slug=slug).exists():
        obj_id = model_class._default_manager.latest('id')
        obj_id = obj_id.id + 1
        slug = f'{slug}-{obj_id}'

    return slug