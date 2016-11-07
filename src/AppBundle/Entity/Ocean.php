<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Gedmo\Mapping\Annotation as Gedmo;
use Doctrine\ORM\Mapping as ORM;
/**
 * Ocean
 *
 * @ORM\Table(name="ocean")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\OceanRepository")
 * @Gedmo\TranslationEntity(class="AppBundle\Entity\OceanTranslation")
 */
class Ocean
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=75)
     * @Gedmo\Translatable
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="temperature", type="decimal", precision=4, scale=2)
     */
    private $temperature;

    /**
     * @ORM\OneToMany(
     *   targetEntity="OceanTranslation",
     *   mappedBy="object",
     *   cascade={"persist", "remove"}
     * )
     */
    private $translations;

    public function __construct()
    {
        $this->translations = new ArrayCollection();
    }
    public function getTranslations()
    {
        return $this->translations;
    }
    public function addTranslation(OceanTranslation $t)
    {
        if (!$this->translations->contains($t)) {
            $this->translations[] = $t;
            $t->setObject($this);
        }
    }
    public function setTranslations($at)        // method used when values is set throught a type collection (add new throught the data-prototype)
    {
        foreach ($at as $t) {
            $this->addTranslation($t);
        }
        return $this;
    }


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Ocean
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set temperature
     *
     * @param string $temperature
     *
     * @return Ocean
     */
    public function setTemperature($temperature)
    {
        $this->temperature = $temperature;

        return $this;
    }

    /**
     * Get temperature
     *
     * @return string
     */
    public function getTemperature()
    {
        return $this->temperature;
    }
}

