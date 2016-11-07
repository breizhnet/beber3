<?php
/**
 * Created by PhpStorm.
 * User: laurent
 * Date: 26/10/2016
 * Time: 14:31
 */

namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\OceanTranslation;
use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use AppBundle\Entity\Ocean;
use Symfony\Component\Validator\Tests\Fixtures\Entity;

class LoadOceanData implements FixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $oceanFirst = new Ocean();
        $oceanFirst->setName('Ocean 01');
        $oceanFirst->setTemperature('21');
        $oceanFirst->addTranslation(new \AppBundle\Entity\OceanTranslation('fr','name','Ocean 01 FR'));
        $oceanFirst->addTranslation(new \AppBundle\Entity\OceanTranslation('en','name','Ocean 01 EN'));
        $oceanFirst->addTranslation(new \AppBundle\Entity\OceanTranslation('es','name','Ocean 01 ES'));

        $oceanSecond = new Ocean();
        $oceanSecond->setName('Ocean 02');
        $oceanSecond->setTemperature('17');
        $oceanSecond->addTranslation(new \AppBundle\Entity\OceanTranslation('fr','name','Ocean 02 FR'));
        $oceanSecond->addTranslation(new \AppBundle\Entity\OceanTranslation('en','name','Ocean 02 EN'));
        $oceanSecond->addTranslation(new \AppBundle\Entity\OceanTranslation('es','name','Ocean 02 ES'));

        $oceanThird = new Ocean();
        $oceanThird->setName('Ocean 03');
        $oceanThird->setTemperature('4');
        $oceanThird->addTranslation(new \AppBundle\Entity\OceanTranslation('fr','name','Ocean 03 FR'));
        $oceanThird->addTranslation(new \AppBundle\Entity\OceanTranslation('en','name','Ocean 03 EN'));
        $oceanThird->addTranslation(new \AppBundle\Entity\OceanTranslation('es','name','Ocean 03 ES'));

        $oceanFourth = new Ocean();
        $oceanFourth->setName('Ocean 04');
        $oceanFourth->setTemperature('15');
        $oceanFourth->addTranslation(new \AppBundle\Entity\OceanTranslation('fr','name','Ocean 04 FR'));
        $oceanFourth->addTranslation(new \AppBundle\Entity\OceanTranslation('en','name','Ocean 04 EN'));
        $oceanFourth->addTranslation(new \AppBundle\Entity\OceanTranslation('es','name','Ocean 04 ES'));

        $oceanFifth = new Ocean();
        $oceanFifth->setName('Ocean 05');
        $oceanFifth->setTemperature('8');
        $oceanFifth->addTranslation(new \AppBundle\Entity\OceanTranslation('fr','name','Ocean 05 FR'));
        $oceanFifth->addTranslation(new \AppBundle\Entity\OceanTranslation('en','name','Ocean 05 EN'));
        $oceanFifth->addTranslation(new \AppBundle\Entity\OceanTranslation('es','name','Ocean 05 ES'));

        $oceanSixth = new Ocean();
        $oceanSixth->setName('Ocean 06');
        $oceanSixth->setTemperature('11');
        $oceanSixth->addTranslation(new \AppBundle\Entity\OceanTranslation('fr','name','Ocean 06 FR'));
        $oceanSixth->addTranslation(new \AppBundle\Entity\OceanTranslation('en','name','Ocean 06 EN'));
        $oceanSixth->addTranslation(new \AppBundle\Entity\OceanTranslation('es','name','Ocean 06 ES'));

        $manager->persist($oceanSixth);
        $manager->persist($oceanFifth);
        $manager->persist($oceanFourth);
        $manager->persist($oceanThird);
        $manager->persist($oceanSecond);
        $manager->persist($oceanFirst);
        $manager->flush();
    }
}