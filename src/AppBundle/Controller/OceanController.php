<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Ocean;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * Ocean controller.
 *
 * @Route("ocean")
 */
class OceanController extends Controller
{
    /**
     * Lists all ocean entities.
     *
     * @Route("/", name="ocean_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $oceans = $em->getRepository('AppBundle:Ocean')->findAll();

        return $this->render('ocean/index.html.twig', array(
            'oceans' => $oceans,
        ));
    }

    /**
     * Creates a new ocean entity.
     *
     * @Route("/new", name="ocean_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $ocean = new Ocean();
        $form = $this->createForm('AppBundle\Form\OceanType', $ocean);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($ocean);
            $em->flush($ocean);

            return $this->redirectToRoute('ocean_show', array('id' => $ocean->getId()));
        }

        return $this->render('ocean/new.html.twig', array(
            'ocean' => $ocean,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a ocean entity.
     *
     * @Route("/{id}", name="ocean_show")
     * @Method("GET")
     */
    public function showAction(Ocean $ocean)
    {
        $deleteForm = $this->createDeleteForm($ocean);

        return $this->render('ocean/show.html.twig', array(
            'ocean' => $ocean,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing ocean entity.
     *
     * @Route("/{id}/edit", name="ocean_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Ocean $ocean)
    {
        $deleteForm = $this->createDeleteForm($ocean);
        $editForm = $this->createForm('AppBundle\Form\OceanType', $ocean);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('ocean_edit', array('id' => $ocean->getId()));
        }

        return $this->render('ocean/edit.html.twig', array(
            'ocean' => $ocean,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a ocean entity.
     *
     * @Route("/{id}", name="ocean_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Ocean $ocean)
    {
        $form = $this->createDeleteForm($ocean);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($ocean);
            $em->flush($ocean);
        }

        return $this->redirectToRoute('ocean_index');
    }

    /**
     * Creates a form to delete a ocean entity.
     *
     * @param Ocean $ocean The ocean entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Ocean $ocean)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('ocean_delete', array('id' => $ocean->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
