<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class audio_file_test extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}
