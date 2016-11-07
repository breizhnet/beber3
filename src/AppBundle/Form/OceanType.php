<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use AppBundle\Form\TranslatableType;
use AppBundle\Entity\OceanTranslation;

class OceanType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('temperature', null, [
                'label' => 'ocean.form.label.temperature'
            ])
            ->add('name', TranslatableType::class, [
                'label'                => 'ocean.form.label.name',
                'personal_translation' => OceanTranslation::class,
                'property_path'        => 'translations'
            ])
        ;
    }
    
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\Ocean'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'appbundle_ocean';
    }


}
