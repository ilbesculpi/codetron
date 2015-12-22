<?php

namespace App\Model\Table;

use Cake\ORM\Table;

class {{ Models }}Table extends Table
{
	
	public function initialize(array $config)
    {
        $this->table('{{ table }}');
		$this->entityClass('App\Model\Entity\{{ Model }}');
    }
	
}