<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;


use Gedmo\Translatable\TranslatableListener;
use Doctrine\ORM\Query;


class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {

        $locale = $request->getLocale();
        //dump($locale);
        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('AppBundle:Ocean')
        ;


        $oceans = $repository->findAllByLocale($locale);




        // replace this example code with whatever you need
        return $this->render('default/index.html.twig',['oceans' => $oceans] );
    }
}
